import React, {useState} from 'react';
import moment from "moment";
import 'moment/locale/fr'
import { toast, } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { postResource } from "./Api";
import { jwtDecode } from "jwt-decode";


export const errorMessage = (e) => {
  if (e.response.status === 500) {
    onServerError(e.data.message)
  }else if(e.response.status === 404) {
    onServerError(e.data.message)
  }else if(e.response.status === 403) {
    onServerError("Accès non autorisé.")
  }
}

export const dateToFRFrom = date =>{
  return moment(date).fromNow()
}

export const dateToFR = date =>{
  return moment(date).format('LL')
}

export const dateToY = date =>{
  return moment(date).format('YYYY')
}

export const dateToM = date =>{
  return moment(date).format('MM')
}

export const dateToD = date =>{
  return moment(date).format('DD')
}

/** Affiche un message flash sur l'écran */
export const showFlasMessage = ({ ...rest }) => {

  
}


/**
 * PHONE DATA
 */

/** Permet de stocker les infos utilisateurs sur le telephone en json*/
export const storeData = async (key, value) => {
  try {
    await localStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}


/** Permet de recuperer les infos utilisateurs sur le telephone*/
export const getData = async (key) => {
  try {
    const value = await localStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.log(e)
  }
}

/** Permet de supprimer les infos utilisateurs sur le telephone*/
export const removeData = async (key) => {
  try {
    const value = await localStorage.removeItem(key)
  } catch (e) {
    console.log(e);
    // error reading value
  }
}

/**
 *  END PHONE DATA
 */


/**
 * 
 * ACCESS TOKEN  
 */

/** Permet de retrouver le token de l'utilisateur connecté */
export const getToken = async () => {
  const access_token = await getData("access_token")
  return access_token
}

/** Permet de retrouver le token de l'utilisateur connecté */
export const getRefreshToken = async () => {
  const refresh_token = await getData("refresh_token")
  //console.log("refresh_token");
  return refresh_token
}

/** Permet de retrouver le token de l'utilisateur connecté */
export const validateToken = async () => {
  const token = await getToken()
  if (typeof(token)!="undefined") {
    const tokenInfos = jwtDecode(token)
    const now = Math.floor(Date.now() / 1000)
    if (tokenInfos.exp < now) {
      // await getNewToken()
      console.log(false)
    return false
    }else {
      console.log(true)
      return true
    }
  }else{
    return false
  }
  
  
}


const getNewToken = async () => {
  const refresh_token = await getRefreshToken()
  const data = {refresh_token}
   await  postResource(`token/renew`,  data ).then((res) => {
      const access_token =  res.data.token
      const refresh_token =  res.data.refresh_token
      storeData('access_token',access_token)
      storeData('refresh_token',refresh_token)
    })
  }


/**
 *  END ACCESS TOKEN 
 */





export const validate = (value, register = () => { }) => {
  
}
/**
 * 
 * FORM CONTROL 
 */

/** Check format email  */
export const validatorEmail = email => {
  var re = /\S+@\S+\.\S+/
  return email.match(re)
  
}


/** Check format text length minimum  */
export const validatorStringMinimum = (minimum, text) => {
  return text.length >= minimum
}


/** Check format text length maximum  */
export const validatorStringMaximum = (maximum, text) => {
  return text.length <= maximum
}


/** Check format text length maximum  */
export const validatorPhone = (phone) => {
  var re = /^[0-9]{8}$/
  return phone.match(re)
}





/** Get minutes from Two Dates */

export const  getMinutesBetweenDates=(startDate, endDate) =>{
  var diff = endDate.getTime() - startDate.getTime();
  const minutes = parseInt(diff / 60000)
  if((minutes/60/24) > 1) return `${parseInt(minutes/60/24)} j`
  if((minutes/60) > 0) return `${parseInt(minutes/60)} h`

  return `${parseInt(minutes)} min`
}


/** Get minutes from Two Dates */

export const  getContentNumberWords=(world,nb=15) =>{
  
  let w =  world.split(' ',nb)
  let l =  world.split(' ')

  w =w.join(' ')
  l =l.join(' ')
  if (l.length > w.length)
   w = `${w} ...`
  return w
}




/** Render Bg Color */

export const renderStatusText = (status, textStatus) => {
  var text=null
  switch (status) {
    case "canceled":
      text="Annulée"
      break;

    case "validated":
      text="Validée"
      break;
    case "published":
      text="Publiée"
      break;
      case "confirmed":
        text="Confirmée"
        break;
  
    default:
      text= textStatus? textStatus.default: "En attente"
      break;
  }
  return text
}


/** Render Bg Color Boolean */

export const renderStatusBooleanText = (status, textStatus) => {
  var text=null
  switch (status) {
    case false:
      text="En attente"
      break;

    case true:
      text="Confirmé"
      break;

  }
  return text
}


/** SERVER ERROR */

export const onServerError = description =>{
  toast.error(description, {
        position: toast.POSITION.TOP_RIGHT
      });
}

export const onServerSuccess = description =>{
   
      toast.success(description, {
        position: toast.POSITION.TOP_RIGHT
      });
  
}

export const onServerWarning = description =>{
  toast.warn(description, {
        position: toast.POSITION.TOP_RIGHT
      });
}
