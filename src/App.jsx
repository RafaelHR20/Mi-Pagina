import React from 'react';

const PortafolioPersonal = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Navegación Básica */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center border-b-2 border-purple-100">
        <span className="text-xl font-bold text-purple-700">Mi Súper Página</span>
        <div className="space-x-4 hidden md:block">
          <a href="#sobre-mi" className="hover:text-purple-600 font-medium transition-colors">Sobre Mí</a>
          <a href="#gustos" className="hover:text-purple-600 font-medium transition-colors">Gustos</a>
          <a href="#criptografia" className="hover:text-purple-600 font-medium transition-colors">Criptografía</a>
          <a href="#redes" className="hover:text-purple-600 font-medium transition-colors">Redes</a>
        </div>
      </nav>

      <main>
        {/* Presentación y Botones */}
        <header className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Hola, soy <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-fuchsia-500">
              Rafael
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
            Empezando con el desarrollo de software, enfocado en crear soluciones tecnológicas eficientes. 
            Me apasiona construir proyectos de alto impacto y aprender nuevas herramientas.
          </p>
          
          {/* Contenedor de los dos botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/CV-Rafael.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md shadow-purple-200 hover:bg-purple-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Ver Currículum (CV)
            </a>
            <a 
              href="/public.key" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-purple-700 border-2 border-purple-600 font-bold rounded-lg shadow-sm hover:bg-purple-50 transition-all transform hover:-translate-y-1"
            >
              Mi llave pública
            </a>
          </div>
        </header>

        {/* Sección: Sobre Mí */}
        <section id="sobre-mi" className="py-16 px-6 bg-purple-50 shadow-sm border-y border-purple-100">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-white rounded-full shrink-0 flex items-center justify-center text-purple-300 border-4 border-purple-300 shadow-md overflow-hidden">
              <img src="/Foto-Mi.jpeg" alt="Foto de perfil de Rafael" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 border-b-4 border-fuchsia-500 inline-block pb-1 text-purple-900">
                Sobre Mí
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Soy estudiante de la Escuela Superior de Cómputo (ESCOM) del IPN. Me interesa la creación de soluciones
                tecnológicas robustas, desde la lógica del frontend hasta la estructura del backend.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Disfruto trabajar en equipo aplicando metodologías ágiles para 
                asegurar la calidad del código y la entrega continua de valor.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Intereses y Gustos */}
        <section id="gustos" className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-900">Mis pasatiempos favoritos son:</h2>
          
          <div className="flex flex-col gap-6">

            {/* Tarjeta 1: Escuchar Música */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:border-purple-400 hover:shadow-md transition-all group flex flex-col md:flex-row items-center gap-6">
              <div className="w-40 h-40 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/musica.jpg" alt="Persona escuchando música" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Escuchar Música</h3>
                <p className="text-slate-600 text-md leading-relaxed">
                  Siempre me ha gustado escuchar música; es una excelente manera de encontrar un poco de paz o tener sonido de fondo mientras juego o hago tareas de la escuela, ya que no me agrada el silencio prolongado. Últimamente he estado escuchando mucho a Twice.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Videojuegos */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:border-purple-400 hover:shadow-md transition-all group flex flex-col md:flex-row items-center gap-6">
              <div className="w-40 h-40 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden p-2">
                <img src="/Destiny-Symbol.png" alt="Símbolo del videojuego Destiny" className="w-full h-full object-contain group-hover:scale-110 transition-transform"/>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Jugar videojuegos</h3>
                <p className="text-slate-600 text-md leading-relaxed">
                  Desde pequeño me han gustado los videojuegos. Crecí con una PlayStation 2, y aunque no jugaba tanto en esa época, ahí nació mi afición. Luego pasé a la PS3 y la PS4, donde descubrí el juego que más me ha entretenido y gracias al cual he formado grandes amistades: Destiny.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Viajes */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:border-purple-400 hover:shadow-md transition-all group flex flex-col md:flex-row items-center gap-6">
              <div className="w-40 h-40 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/zaca.jpg" alt="Paisaje hermoso durante un viaje" className="w-full h-full object-cover group-hover:scale-110 transition-transform"/>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Salir de viaje y visitar lugares</h3>
                <p className="text-slate-600 text-md leading-relaxed">
                  Disfruto mucho salir de viaje y explorar nuevos destinos. Aunque no lo hago con tanta frecuencia, me encanta conocer lugares distintos, especialmente aquellos que ofrecen paisajes naturales hermosos.
                </p>
              </div>
            </div>

          </div>
        </section>
          {/* Sección: Criptografía */}
        <section id="criptografia" className="py-16 px-6 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-purple-600 hover:shadow-lg transition-shadow flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 shrink-0 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                {/* Ícono de un candado / escudo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                  <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-purple-900 mb-3">Criptografía y Privacidad</h2>
                <p className="text-slate-600 leading-relaxed">
                  Me llama la atencion acerca de la criptografía, ya que es una herramienta fundamental para proteger la información en el mundo digital. Entender cómo funcionan los algoritmos de cifrado y las claves públicas/privadas me ha permitido apreciar la importancia de la seguridad en línea y cómo podemos proteger nuestros datos personales.
                </p>
              </div>
            </div>

            {/* Historia Graciosa Añadida */}
            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 text-sm">
              <span className="font-bold text-purple-800 block mb-1">📜 Una pequeña anécdota criptográfica:</span>
              <p className="text-slate-600 leading-relaxed italic">
                "Hace tiempo se me ocurrió la brillante idea de pasarle una nota confidencial a un amigo en clase usando un cifrado Afín. Me pasé media hora calculando el inverso modular a mano para asegurarme de que fuera impenetrable. Cuando por fin se la entregué, olvidé un pequeño detalle: él no tenía idea de qué era la aritmética modular. Miró el papel con cara de pánico y me preguntó en voz alta si me estaba dando un colapso mental. Al final, el profesor confiscó la nota, intentó leerla, no entendió nada y me terminó regañando por tener 'pésima ortografía'. Desde entonces entendí que generar una clave segura es vital, ¡pero asegurarte de que el receptor sepa descifrarla lo es aún más!"
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Redes Sociales */}
        <section id="redes" className="py-16 px-6 bg-purple-50 shadow-sm border-t border-purple-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">Conecta conmigo</h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
              Holaa, si te intereso mi perfil, me puedes contactar a través de mis redes sociales. Si me llegas a mandar mensaje que sea un buen tiktok o meme gracioso. Gracias
            </p>
            <div className="flex justify-center gap-6 md:gap-12 flex-wrap">

              {/* Facebook */}
              <a href="https://www.facebook.com/share/1CRanycfS9/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Facebook" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-700 shadow-md border border-purple-100 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </div>
                <span className="font-semibold text-purple-800 group-hover:text-purple-600 transition-colors">Facebook</span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/rafaelhr_24?igsh=MWpsd2kzazZvNmYybw==" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Instagram" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-700 shadow-md border border-purple-100 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </div>
                <span className="font-semibold text-purple-800 group-hover:text-purple-600 transition-colors">Instagram</span>
              </a>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-purple-200 text-center py-6 border-t-4 border-fuchsia-500">
        <p>© {new Date().getFullYear()} Rafael. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default PortafolioPersonal;