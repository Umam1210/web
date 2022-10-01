package routes

import (
	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	UserRoutes(r)
	ArtikelRoutes(r)
	AuthRoutes(r)
	// BookmarkRoutes(r)
}
