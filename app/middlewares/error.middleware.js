export function internalErrorPage(err, req, res, next) {
    console.log(err); 
    res.status(500).send("Erreur temporaire, merci d'essayer à nouveau plus tard")
}

export function notFoundPage(req, res) {
    res.status(404).render("404.ejs")
}