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
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" img-src="/statics/greenleaff.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" img-src="/statics/cornn.jpg">                   
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" img-src="/statics/barleyy.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="farm" img-src="/statics/farm.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="team2" img-src="/statics/team2.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="team3" img-src="/statics/team3.jpg">
                    <div class="text-h3 q-mt-xl">Palm Valley NG</div>
                    <div class="q-pa-md q-ma-md text-center text-white text-h5 text-weight-light">
                    {{ slideText }}
                    </div>
                </q-carousel-slide>                                                
            </q-carousel>
        </div>

        <!-- Our Identity Section -->
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


        <!-- Two Cards -->
        <div class="q-pa-md row q-gutter-xs bg-grey-4" id="card-items">
            <div >
                <q-card class="my-card1 text-white bg-primary">
                    <p> <b>Served </b><br> 
                    <span class="text-h3 text-weight-thin">250+ Clients <br> </span>
                    <span text-align="right"><b>...in 20 states</b></span></p>
                </q-card>
            </div>

            <div >
                <q-card class="my-card2 text-black" > 
                    <p>Through partnerships, we provide premium services for our ever-increasing 
                        clientele base across different states in Nigeria.</p>
                        <!-- <div class="row justify-end"> <q-btn no-caps color="primary" label="More" /> </div> -->
                </q-card>
            </div>

        </div>

        <!-- Partnerships with Agribusiness Clusters -->
        <q-parallax :height="300" :speed="1">
            <template v-slot:media>
                <img src="/statics/partnerspix.jpg">
            </template>

            <h4 class="text-white q-pa-lg">Partnership with Agribusiness Clusters </h4>
        </q-parallax>

        <!-- Insert Imported Table for Agribusiness Clusters-->
        <Table/>

        <!-- Our Businesses Section -->
        <div>
            <q-page-container class="text-body1">
                <div id="h3" class="text-h4">
                    Our Businesses
                    <q-badge align="top">PVNL</q-badge>
                </div>
                <p>
                   Palm Valley Nigeria is a household name in Agribusiness Support 
                   Service provision in Nigeria. We work with other private investors 
                   in the Agricultural Value Chain to form a community with like minds 
                   at revolutionizing agriculture in Nigeria. We form partnership with 
                   donor organization to support smallholder farmers increase productivity 
                   and income. The following are organizations we have established partnership 
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

                <q-card>
                    <q-card-section>
                        PVNL was introduced to IFDC during the 1,000s + project in 2009. 
                        At the end of project they scale up to 2SCALE “Towards Sustainable Clusters 
                        in Agribusiness through Learning in Entrepreneurship".
                    </q-card-section>                
                </q-card>              
            </q-expansion-item>

            <!-- List TWO -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="International Institute for Tropical Agriculture (IITA)"
                default-closed >

                <q-card>
                    <q-card-section>
                        •	N2Africa Project – Putting Nitrogen Fixation to Work for 
                            Smallholder Farmers in Africa <br> <br>
                        •	Agresult- Aflasafe Program <br> <br>
                        •	Harvest Field – Suppliers of Aflasafe to PVNL
                    </q-card-section>                
                </q-card>                  
            </q-expansion-item>
            

             <!-- List THREE -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="OCP Africa Fertilizers"
                default-closed >

                 <q-card>
                    <q-card-section>
                        PVNL entered a 3 years contract with OCP Africa Fertilizer to 
                        provide business support services to selected farmers in Nigeria 
                        under the OCP Africa Agribooster program. In this partnership we 
                        also provide training and build capacities of smallholder farmers in 
                        Agribusiness and enterprises. We leverage on our experience in project 
                        monitoring to provide technical backstopping on monitoring and evaluation 
                        of other private investors implementing OCP Africa Agribooster program.
                    </q-card-section>                
                </q-card>                    
            </q-expansion-item>


             <!-- List FOUR -->
            <q-expansion-item
                color = "primary"
                expand-separator
                icon="work"
                label="Cellulant"
                default-closed >

                 <q-card>
                    <q-card-section>
                        Cellulant is a pan-African FinTech company that provides for Africa’s 
                        agricultural sector. An Agritech solution known as Agrikore, which powers 
                        a Food Processing Marketplace for sourcing of quality raw materials from 
                        local farmers to Food & Beverage Processors. PVNL has entered partnership 
                        with Cellulant to support smallholder farmers mop up excess grains and provide 
                        market linkages. 
                    </q-card-section>                
                </q-card>                 
            </q-expansion-item>
            </q-list>
        </div>

        <!-- OUr Succes Stories -->
        <div class="tab-card row bg-grey-4 q-gutter-xs q-pa-md">
            <q-card class="my-card">
            <q-card-section>
                <div class="text-h6 text-grey-8">Our Success Stories</div>
            </q-card-section>

            <q-tabs v-model="tab1" class="text-primary">
                <q-tab label="#1" name="one" />
                <q-tab label="#2" name="two" />
                <q-tab label="#3" name="three" />
                <q-tab label="#4" name="four" />
            </q-tabs>

            <q-separator />

            <q-tab-panels class="bg-grey-8 text-white" v-model="tab1" animated>
                <q-tab-panel name="one">
                PVNL has successfully managed  grants on behalf of partners. We provided business 
                support services to IFDC  2SCALE project from 2009 to 2015 supporting 5,000 smallholder 
                farmers in the ginger, soybean, groundnut, maize, tomato, and chili pepper value chains 
                in Kaduna State.
                </q-tab-panel>

                <q-tab-panel name="two">
                PVNL provided business support to N2Africa project on soybeans inoculation at Lere, 
                Kubau, Kajuru and Jema’a LGA from 2013 to 2017.
                </q-tab-panel>

                <q-tab-panel name="three">
                PVNL in partnership with Base of the Pyramid Innovation Center, Netherland 
                (implemented by 2SCALE) supported the development of marketing concept for 
                Tombrown processing among 2,000 women and youth groundnut processors in Pampaida, 
                Ikara LGA Kaduna State in year 2016.
                </q-tab-panel>

                <q-tab-panel name="four">                
                PVNL also partner with Agresult project IITA for the implementation of Aflasafe 
                program in Nigeria. This program focused on reduction of aflatoxins in maize and 
                groundnut. PVNL was responsible for implementation of the program to 4,000 SHF at 
                Pampaida, and 2,000 at Yarkasuwa, Lere LGA of Kaduna State with excellent performance 
                recorded on aflatoxin reduced maize. 
                </q-tab-panel>                                                                                              
            </q-tab-panels>
            </q-card>


             <q-card class="my-card">
            <q-card-section>
                <div class="text-h6 text-grey-8">Our Success Stories</div>
            </q-card-section>

            <q-tabs v-model="tab4" class="text-primary">
                <q-tab label="#5" name="five" />
                <q-tab label="#6" name="six" />
                <q-tab label="#7" name="seven" />
                <q-tab label="#8" name="eight" />
            </q-tabs>

            <q-separator />

            <q-tab-panels class="bg-primary text-white" v-model="tab4" animated>
                <q-tab-panel name="five">
                We provided Business Support Services to 2 grantees of USADF in Kwoi Jaba LGA of Kaduna 
                State-Yeyock Women Sabzuro Ginger Farmers Association and Sab-zuro Ginger Farmers’ 
                Cooperative Society from 2011 to 2017. A total grant portfolio $40,000 per cluster 
                was spent per cluster to provide training, capacity building, subsidies on mechanization 
                and consultancy services fees. In Kano, we train ‘’Badarawa Ku Tashi Ku Nema’’women entrepreneur 
                on Group Dynamics and Entrepreneurship Development. They were also grantees of USADF in 2011 -2012.
                </q-tab-panel> 

                <q-tab-panel name="six">
                In 2019 cropping year, we mobilized 5,000 farmers to participate in the OCP Africa-ABU 
                Agribooster program. This program is a financing model that permits SHF access micro loans, 
                have access to quality inputs at the right time and space, and linkage to market. We have 
                resilient and experience staff to handle multi-task activities. This also qualified us to 
                aggregate the produce at harvest in partnership with ABU Micro Finance Bank. PVNL aggregated 
                1,200 Mt of maize in year 2019 across 5 LGAs, in Kaduna and 2 LGAs in Niger State. 
                </q-tab-panel> 

                <q-tab-panel name="seven">
                A percentage increase of 52.908% and a revenue growth of N276,640.00(two Hundred and 
                Seventy-Six Thousand, Six Hundred and Forty Naira) Only in 2019 from N180,880.00 
                (One Hundred and Eighty Thousand, Eight Hundred and Eighty Naira) only in the previous 
                year. Loan repayment was 92% as at March 2020. 
                </q-tab-panel> 

                <q-tab-panel name="eight">
                In the same year 2019 we provided oversight function of Monitoring and Evaluation of 
                Thrive Agric- OCP Africa Agribooster program implementation on maize, rice and soybean 
                value chains targeted at 10,000 farmers spread across Kaduna, Niger, Kano, Katsina and 
                Kebbi states  
                </q-tab-panel>                                                                                               
            </q-tab-panels>
            </q-card>
        </div>
    </q-page>
</template>



<script>
import Table from '../components/Table'
export default {
    components: {
        Table
    },
  data () {
    return {
    // for Carousel
      padding: true,
      navigation: true,
      navPos: 'bottom',

      slide: 'style',
      slideText: 'Palm Valley NG - Providing agricultural solutions to an oil dependent Nigeria.',

    // for success stories
      tab1: 'one',
      tab4: 'five'
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

    #card-items{
        justify-content: center;
        align-items: center;
    }

    .my-card1{
        max-width: 250px;
        min-height: 200px;   
        padding-top: 20px;
        padding-bottom: 20px;
        
    }

    .my-card2{
        max-width: 250px;
        min-height: 200px;   
        padding-top: 20px;
        padding-bottom: 0px;
        padding-right: 5px;
        padding-left: 5px;        
    }

    a{
        text-decoration: none;
        color: green;
    }

    .tab-card{
        justify-content: center;
        align-items: center;
    }

    .my-card{                
        width: 100%;
        max-width: 400px;
        min-height: 350px;
    }
</style>