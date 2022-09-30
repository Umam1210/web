package models

// gorm berfungsi untuk mengatur tipe data atau custom tipe data

type User struct {
	ID       int    `json:"id" gorm:"User_Id"`
	FullName string `json:"name"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Password string `json:"password" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Addres   string `json:"addres" gorm:"type: varchar(255)"`
	// Artikel   ArtikelResponse `json:"artikel" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	// ArtikelID int             `json:"artikel_id"`
}

// berfungsi untuk relasi

type UserResponse struct {
	ID       int    `json:"id" `
	FullName string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Phone    string `json:"phone"`
	Addres   string `json:"addres"`
}

func (UserResponse) TableName() string {
	return "users"
}
