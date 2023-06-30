export const getPeeps = async (setPeeps) => {
  try {
    const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps");
    const data = await response.json();
    setPeeps(data);
    return data
  }
  catch(e) {
    console.log(e)
  }
}

export default getPeeps