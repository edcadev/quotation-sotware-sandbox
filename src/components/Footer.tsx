export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              Información de Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Teléfono: +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@empresa.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Email: contacto@empresa.com
                </a>
              </li>
              <li className="text-zinc-600 dark:text-zinc-400">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Dirección */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              Ubicación
            </h3>
            <address className="mt-4 space-y-2 text-sm leading-6 not-italic text-zinc-600 dark:text-zinc-400">
              <p>Calle Principal 123</p>
              <p>Ciudad, Estado 12345</p>
              <p>País</p>
            </address>
          </div>

          {/* Información Adicional */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              Soporte
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              ¿Necesita ayuda con su cotización? Nuestro equipo está disponible
              para asistirle en todo el proceso.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Sistema de Cotización. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
