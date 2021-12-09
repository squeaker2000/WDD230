const fetchDat = async () => {
    let key = "Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N"
    const response = await fetch(" https://nathan-byui-api.herokuapp.com/temples/{temple_id}");
    const data = await response.json();
}