const { getAuth, onAuthStateChanged } = require('firebase/auth');
const app = require('../config/firebase');

// Inicializar la autenticación de Firebase
const auth = getAuth(app);

// Middleware de autenticación básico
const authentication = (req, res, next) => {
    // Verificar si hay un usuario autenticado
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                req.user = user; // Almacenar el usuario en el objeto de solicitud
                console.log("Usuario autenticado:", user.uid);
                next(); // Continuar con la siguiente función de middleware
            } else {
                res.status(401).json({ message: 'Acceso no autorizado. Debes iniciar sesión.' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al verificar la autenticación" });
    }
};

module.exports = authentication;

