package repositories

import (
	"journey/models"

	"gorm.io/gorm"
)

type BookmarkRepository interface {
	FindBookmarks() ([]models.Bookmark, error)
	GetBookmark(ID int) (models.Bookmark, error)
	CreateBookmark(Bookmark models.Bookmark) (models.Bookmark, error)
	// UpdateBookmark(Bookmark models.Bookmark) (models.Bookmark, error)
	DeleteBookmark(Bookmark models.Bookmark) (models.Bookmark, error)
}

func RepositoryBookmark(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindBookmarks() ([]models.Bookmark, error) {
	var bookmarks []models.Bookmark
	err := r.db.Preload("Artikel").Preload("User").Find(&bookmarks).Error

	return bookmarks, err
}

func (r *repository) GetBookmark(ID int) (models.Bookmark, error) {
	var bookmark models.Bookmark
	err := r.db.Preload("Artikel").First(&bookmark, ID).Error

	return bookmark, err

}

func (r *repository) CreateBookmark(bookmark models.Bookmark) (models.Bookmark, error) {
	err := r.db.Create(&bookmark).Error

	return bookmark, err
}

func (r *repository) UpdateBookmark(bookmark models.Bookmark) (models.Bookmark, error) {
	err := r.db.Save(&bookmark).Error

	return bookmark, err
}

func (r *repository) DeleteBookmark(bookmark models.Bookmark) (models.Bookmark, error) {
	err := r.db.Delete(&bookmark).Error

	return bookmark, err
}
