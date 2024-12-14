const butt = document.getElementById("butt")
// let getI = document.getElementById("ip")
// const email = "naip_naip@mail.ru"



class Robux {
    async getOnEmail() {
        let res = await fetch("https://api.db-ip.com/v2/free/self")
        let data = await res.json()
        // getI.value = data.ipAddress
        return data.ipAddress
    }
}

let get = new Robux()

// get.getOnEmail()

window.onload = () => {
    console.log(get.getOnEmail())
}
