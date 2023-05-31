export async function getTranslation() {
    const response = await fetch(`https://api.lokalise.com/api2/projects/38748689645b466d7edb81.77771980:branch/keys?include_translations=1`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'X-Api-Token':'c25c49ad600c112a7f5d0f7202ebb5dd2a33e1af', 'Access-Control-Allow-Headers':'*'}
      })

    return await response.json();
}