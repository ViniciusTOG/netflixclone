import React from 'react'
import {BrowserContainer} from "../containers/Browse"
import { useContent } from "../hooks";
import {selectionMap} from '../utils'

export default function Browse() {

  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });

  return(

    <BrowserContainer slides={slides}/>
  )

}
