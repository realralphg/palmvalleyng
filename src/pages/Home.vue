<template>
    <q-page >
        <div >
            <q-carousel
                v-model="slide"
                swipeable
                animated
                infinite
                autoplay
                :padding="padding"
                :navigation="navigation"
                :navigation-position="navPos"
                height="350px"
                class="bg-grey-8 text-white"
                >
                <q-carousel-slide name="style" img-src="/statics/palmm.jpg" >
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ lorem }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" img-src="/statics/greenleaff.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ lorem }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" img-src="/statics/cornn.jpg">                   
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ lorem }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" img-src="/statics/barleyy.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ lorem }}
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>

        <div >
            <q-page-container class="text-body1">
                <div id="h3" class="text-h4">
                    Our Identity
                    <q-badge align="top">PVNL</q-badge>
                </div>
                <p>
                    Palm Valley Nigeria Limited (PVNL) is a limited liability company registered 
                    under the company Allied Matters Act of 1990 with RC No 792177. The company 
                    was established in 2008 with the vision of providing agricultural solutions to 
                    an oil dependent Nigeria... <router-link to="/aboutus">read more</router-link>
                </p>
            </q-page-container>
        </div>



        <div class="q-pa-md row items-start q-gutter-xs bg-grey-4" id="card-items">
            <div >
                <q-card class="my-card text-white bg-primary">
                    <p> <b>Served </b><br> 
                    <span class="text-h3 text-weight-thin">250+ Clients <br> </span>
                    <span text-align="right"><b>...in 20 states</b></span></p>
                </q-card>
            </div>

            <div >
                <q-card class="my-card text-black" >          

                <q-card-section class="q-pt-none">
                    <p>Through partnerships, we provide premium services for our ever-increasing 
                        clientele base across different states in Nigeria.</p>
                </q-card-section>
                </q-card>
            </div>

        </div>

        <div>
            <q-page-container class="text-body2">
                <div id="h3" class="text-h4">
                    Our Businesses
                    <q-badge align="top">PVNL</q-badge>
                </div>
                <p>
                   Palm Valley Nigeria is a household name in Agribusiness Support Service
                    provision in Nigeria. We work with other private investors in the 
                    Agricultural Value Chain to form a community with like minds at 
                    revolutionizing agriculture in Nigeria. We form partnership with donor 
                    organization to support smallholder farmers increase productivity and 
                    income. The following are organizations we have established partnership 
                    to support the growth of Agriculture in Nigeria:
                </p>   
            </q-page-container>
        </div>

        <div class="q-pa-md" style="max-width: auto">
            <q-list bordered class="rounded-borders">
            <!-- List ONE -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="International Fertilizer Development Center (IFDC)"
                default-closed >

                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="1,000s+" />
                

                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="2SCALE" />              
            </q-expansion-item>

            <!-- List TWO -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="International Institute for Tropical Agriculture (IITA)"
                default-closed >


                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="N2Africa- Inoculants" />
                
                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Agresult- Aflasafe Program" /> 

                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="Harvest Field" />
                
                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Aflasafe Program" />                 
            </q-expansion-item>
            

             <!-- List THREE -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="Agribusiness Clusters"
                default-closed >


                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="Nasara Women Cooperative Union, Pampaida Ikara LGA" />
                
                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Jaba Ginger Farmers’ Cooperative Society" /> 

                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="Chikun Chili Pepper, Kaduna" />
                
                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Groundnut Cluster, Pampaida, Ikara LGA" />

                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Soybean Cluster, Yarkasuwa Lere LGA" />                  
            </q-expansion-item>


             <!-- List FOUR -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="Cellulant"
                default-closed >


                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="Produce Offtake" />
                
                <q-expansion-item 
                :header-inset-level="1"                 
                expand-separator 
                icon="check_circle"
                label="Warehouse Management" /> 

                <q-expansion-item
                :header-inset-level="1"
                expand-separator
                icon="check_circle"
                label="Logistics" />               
            </q-expansion-item>
            </q-list>
        </div>
    </q-page>
</template>



<script>
export default {
  data () {
    return {
      padding: true,
      navigation: true,
      navPos: 'bottom',

      slide: 'style',
      lorem: 'Palm Valley NG - Providing agricultural solutions to an oil dependent Nigeria.'
    }
  },
}
</script>


<style scoped>
    p{
        margin-left:40px;
        margin-right:40px;        
    }

    #h3{
        margin-left:40px;
        padding: 0px;
        margin-bottom: 10px;
    }

    .my-card{
        max-width: 250px;
        min-height: 200px;   
        padding-top: 20px;
        padding-bottom: 20px;
        
    }

    #card-items{
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: green;
    }

</style>