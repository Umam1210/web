package usersdto

type UserResponse struct {
	ID       int    `json:"id"`
	Name     string `json:"name" form:"name" validate:"required"`
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
	Phone    string `json:"phone"`
	Addres   string `json:"addres"`
	// Artikel   models.Artikel `json:"-"`
	// ArtikelId int            `json:"artikel_id"`
}