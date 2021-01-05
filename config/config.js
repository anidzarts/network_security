let config = {};

if (Deno.env.get('DATABASE_URL')) {
  config.database = Deno.env.get('DATABASE_URL');
} else {
  config.database = {
    hostname: "dumbo.db.elephantsql.com",
    database: "vgxunmac",
    user: "vgxunmac",
    password: "cutZugSC6ocAmpFJombJ_iIn1Q--gosF",
    port: 5432
  };
}
let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}
export { config }; 


