import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ topLevelAwait ( { 
    // Il nome di esportazione della promessa di attesa di livello superiore per ogni modulo di blocco 
    promiseExportName : "__tla" , 
    // La funzione per generare nomi di importazione della promessa di attesa di livello superiore in ogni modulo di blocco 
    promiseImportName : i  =>  `__tla_ ${ i } ` 
  } ) 
] 
} ) ;
