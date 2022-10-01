package handlers

import (
	"encoding/json"
	bookmarksdto "journey/dto/bookmark"
	dto "journey/dto/result"
	"journey/models"
	"journey/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/gorilla/mux"
)

type handlerBookmark struct {
	BookmarkRepository repositories.BookmarkRepository
}

// var PathFile = os.Getenv("PATH_FILE")

func HandlerBookmark(BookmarkRepository repositories.BookmarkRepository) *handlerBookmark {
	return &handlerBookmark{BookmarkRepository}
}

func (h *handlerBookmark) FindBookmarks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	artikels, err := h.BookmarkRepository.FindBookmarks()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err)
	}

	// for i, p := range artikels {
	// 	artikels[i].Image = os.Getenv("PATH_FILE") + p.Image
	// }

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: artikels}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerBookmark) GetBookmark(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	// var bookmark models.Bookmark

	bookmark, err := h.BookmarkRepository.GetBookmark(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	// artikel.Image = os.Getenv("PATH_FILE") + artikel.Image

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseBookmark(bookmark)}
	json.NewEncoder(w).Encode(response)
}

func (h *handlerBookmark) CreateBookmark(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	// fmt.Println(userId)
	// dataContex := r.Context().Value("dataFile")
	// filename := dataContex.(string)

	artikel_id, _ := strconv.Atoi(r.FormValue("artikel_id"))

	request := bookmarksdto.CreateBookmarkRequest{
		UserID:     userId,
		Artikel_Id: artikel_id,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	bookmark := models.Bookmark{
		UserID: request.UserID,
		// Artikel_Id: request.Artikel_Id,
	}

	data, err := h.BookmarkRepository.CreateBookmark(bookmark)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	// bookmark, _ = h.BookmarkRepository.GetBookmark(data.UserID)

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseBookmark(data)}
	json.NewEncoder(w).Encode(response)
}

// func (h *handlerBookmark) UpdateBookmark(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	request := new(bookmarksdto.UpdateArtikelRequest)
// 	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
// 		w.WriteHeader(http.StatusBadRequest)
// 		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// 		json.NewEncoder(w).Encode(response)
// 		return
// 	}

// 	id, _ := strconv.Atoi(mux.Vars(r)["id"])
// 	artikel, err := h.BookmarkRepository.GetBookmark(int(id))
// 	if err != nil {
// 		w.WriteHeader(http.StatusBadRequest)
// 		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// 		json.NewEncoder(w).Encode(response)
// 		return
// 	}

// 	if request.Title != "" {
// 		artikel.Title = request.Title
// 	}

// 	if request.Image != "" {
// 		artikel.Image = request.Image
// 	}

// 	if request.Desc != "" {
// 		artikel.Desc = request.Desc
// 	}

// 	data, err := h.ArtikelRepository.UpdateArtikel(artikel)
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
// 		json.NewEncoder(w).Encode(response)
// 		return
// 	}

// 	w.WriteHeader(http.StatusOK)
// 	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseArtikel(data)}
// 	json.NewEncoder(w).Encode(response)
// }

func (h *handlerBookmark) DeleteBookmark(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	bookmark, err := h.BookmarkRepository.GetBookmark(id)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.BookmarkRepository.DeleteBookmark(bookmark)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseBookmark(data)}
	json.NewEncoder(w).Encode(response)
}

func convertResponseBookmark(u models.Bookmark) bookmarksdto.BookmarkResponse {
	return bookmarksdto.BookmarkResponse{
		UserID: u.UserID,
		// Artikel_Id: u.Artikel_Id,
	}
}
