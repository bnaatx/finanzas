// Conexión con Supabase. Las claves son las públicas (publishable): están hechas para ir en la app.
// Tus datos los protege el inicio de sesión y las reglas de cada tabla (cada persona ve solo lo suyo).
window.FIN_CONFIG = {
  // Proyecto donde viven las tablas de finanzas (el mismo de Hornea2, para que tú y Santiago tengan cuenta)
  supabaseUrl: "https://lakzeluncrhslcnkwvfx.supabase.co",
  supabaseKey: "sb_publishable_64FOEJvL60uCvSSZHyAO9A_jTP8nj6v",
  // Blu Gestión: solo se lee, para traer las ventas de Blu
  bluUrl: "https://wmhoqsewyvkeqlcovlef.supabase.co",
  bluKey: "sb_publishable_HWDJbidTJFW2j69OQ4o5Qg_euEsc6Wu"
};
