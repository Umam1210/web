package artikelsdto

import "journey/models"

type CreateArtikelRequest struct {
	Title  string      `json:"title" form:"title" validate:"required"`
	Image  string      `json:"image" form:"image" validate:"required"`
	Desc   string      `json:"desc" form:"desc" validate:"required"`
	User   models.User `json:"user"`
	UserId int         `json:"user_id"`
}

type UpdateArtikelRequest struct {
	Title string `json:"title" form:"title"`
	Image string `json:"thumbnail" form:"thumbnail"`
	Desc  string `json:"desc" form:"desc"`
}
