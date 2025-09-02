const API_URL = "https://play.dhis2.org/2.39.1.2/api"; // DHIS2 demo server
const USERNAME = "admin";
const PASSWORD = "district";

export async function sendDataToDHIS2(data) {
  try {
    const response = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`)
      },
      body: JSON.stringify({
        program: "LXca4I2tZxI",   // mock DHIS2 program UID
        orgUnit: "DiszpKrYNg8",  // mock org unit (from demo)
        eventDate: new Date().toISOString(),
        dataValues: [
          { dataElement: "H3P2x4R8dnJ", value: data.name },
          { dataElement: "TuL8IOPzpHh", value: data.age }
        ]
      })
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
}