
// POST TO Send Email and Password for registration
export const postSendEmailAndPassword = async (dataUserReg) => {
   
    const r = await fetch('https://vast-everglades-16758.herokuapp.com/auth/register', {
        method: "POST",
        body: JSON.stringify(dataUserReg),
        headers: {
            'Content-Type': 'application/json',
          },

    })
    const d = await r.json()
    return d
}

// GET TO confirm validation token
export const getConfirmTokenValidation = async (token) => {

    const r = await fetch(`https://vast-everglades-16758.herokuapp.com/auth/validate?token=${token}`,)
    const d = await r.json()
    return d

}

// POST TO user login
export const postLogInUser = async (user) => {
    const r = await fetch('https://vast-everglades-16758.herokuapp.com/auth/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
          },

    })
    const d = await r.json()
    return d
}


export async function getUserData(token) {
    const r = await fetch("https://vast-everglades-16758.herokuapp.com/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (r.status === 200) {
        const data = await r.json();
        return data;
     
    } else {
        console.log('error getUserData')
        return r;
    }
  }


  export async function postAddNewOffer(newOffer, token){
      const r = await fetch("https://vast-everglades-16758.herokuapp.com/offer/add",{
        method: "POST",
        body: newOffer,
        headers: {
           
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }

  export async function PostBook(book, token){
      console.log(book)
    const r = await fetch("https://vast-everglades-16758.herokuapp.com/book/add",{
      method: "POST",
      body:JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
    })
    const d = await r.json()
    return d
}

export async function PostRate(rate, token){

  const r = await fetch("https://vast-everglades-16758.herokuapp.com/ratings/add",{
    method: "POST",
    body:JSON.stringify(rate),
    headers: {
      'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
  })
  const d = await r.json()
  return d
}

  export async function getOffertsByToken(user, token){
    const r = await fetch(`https://vast-everglades-16758.herokuapp.com/offer/sup/${user}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
          
      })
     
      const d = await r.json()
      return d
  }

  export async function DeleteOfferById(id, token){
    
    const r = await fetch(`https://vast-everglades-16758.herokuapp.com/offer/delete/${id}`,{
        method: "DELETE",
        headers: {
           
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }


  // 
  export async function PatchModificateOfferById (id, modificationOffer, token) {
    
    const r = await fetch(`https://vast-everglades-16758.herokuapp.com/offer/modificate/${id}`,{
        method: "PATCH",
        body: modificationOffer,
        headers: {
           
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }

  export async function GetAllOfferts (token) {
    const r = await fetch('https://vast-everglades-16758.herokuapp.com/offer/all',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }

  export async function GetOfferById (token, id) {
    const r = await fetch(`https://vast-everglades-16758.herokuapp.com/offer/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }

  export async function GetAllBooks (token) {
    const r = await fetch('https://vast-everglades-16758.herokuapp.com/book/',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
      })
      const d = await r.json()
      return d
  }

export async function GetAllRatings(token){
  const r = await fetch('https://vast-everglades-16758.herokuapp.com/ratings/',{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
  })
  const d = await r.json()
  return d
}
  