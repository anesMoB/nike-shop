 ****** THANK YOU FOR PURCHACING OUR TEMPLATE, I HOPE IT WILL HELP YOU !! ******

* APP ARCHITECTURE :

  - NAVBAR SECTION 
  - HERO SECTION
  - POPULAR PRODUCTS SECTION
  - ABOUT US SECTION
  - SERVICES SECTION
  - SPECTIAL OFFER SECTION
  - TESTOMONIES (CUSTOMERS REVIEWS) SECTION
  - SUBSCRIPTION SECTION
  - FOOTER & CONTECTS INFOS


* SO, IF YOU WAN TO CHANGE ANY THING IN IT, JUST FOLLOW THESE FOLLOWING STEPS:

 - TO CHANGE TEXTs : 
 
    * GO TO INDEX.TX // IN : app/constants/index.ts
    * SEACH FOR THE SECTION THAT BELONG TO IT
    * CHANGE THE TEXT TARGET
    * DONE

- TO CHANGE IMAGEs / ICONs :
    * ADD YOUR IMAGES / ICONS TO app/images or app/icons  
    * IMPORT YOUR IMAGES / ICONS INTO app/images/index.ts or app/icons/index.ts
    * GO TO INDEX.TX // IN : app/constants/index.ts
    * SEACH FOR THE SECTION THAT BELONG TO IT
    * CHANGE THE URL'S IMAGE TARGET 
    * DONE

- TO CHANGE THE PEACH'S COLOR :
    * GO TO tailwind.config.ts 
    * CHANGE THE HEX_COLOR TO THE TARGET COLOR CODE
        
        const config: Config = {
            ...
            theme: {
                colors: {
                     'peachy': '#ff6452', <==
                     'peachy-dark': '#E55A49', <==
                     'peachy-darker': '#cc5041 ', <==
                },
            },
        },
        
    * DONE