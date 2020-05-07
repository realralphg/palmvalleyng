<template>
    <q-page>
        <div>
        <q-img src="/statics/phone.jpg" :ratio="27/9">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <span class="text-h3 text-weight-thin"> Contact Us </span> 
          </div>
        </q-img>
      </div>

       <div id="contact-info">
            <q-page-container class="text-body1">

                <div class="q-pa-md" style="max-width: 500px" >
                    <q-list padding>                    

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="place" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Office Address:</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            Shop G32, Barnawa Phase II Shopping Complex, 
                            Barnawa Kaduna
                            </span>
                        </q-item-label>
                        </q-item-section> 
                        <q-item-section side >
                        <q-badge label="HQ" />
                        </q-item-section>                   
                    </q-item>

                    <q-separator spaced inset="item" />

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="place" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Address II:</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            No 29 A, Christopher Abashiya Road, Tsauni Kura GRA, 
                            Sabon Tasha Kaduna
                            </span>
                        </q-item-label>
                        </q-item-section>                    
                    </q-item>

                    <q-separator spaced inset="item" />

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="place" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Field Office:</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            Bakin Kasuwa, Yarkasuwa Lere LGA, Kaduna State
                            </span>
                        </q-item-label>
                        </q-item-section>                    
                    </q-item>

                    <q-separator spaced inset="item" />

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="email" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Email:</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            palmvalleyng@gmail.com 
                            </span>
                        </q-item-label>
                        </q-item-section>                    
                    </q-item>

                    <q-separator spaced inset="item" />

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="call" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Telephone</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            +234 8035888719; +234 8037864289
                            </span>
                        </q-item-label>
                        </q-item-section>                    
                    </q-item>

                    <q-separator spaced />

                    <q-item>
                        <q-item-section avatar>
                        <q-btn fab color="primary" icon="apartment" />
                        </q-item-section>
                        <q-item-section> <span class="text-h5">Warehouse Facilities</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                            Sabon Gari Kwoi,
                            2. Bakin Kasuwa, Yarkasuwa Lere LGA Kaduna
                            </span>
                        </q-item-label>
                        </q-item-section>                    
                    </q-item>
                    </q-list>
                </div>
            </q-page-container>
        </div>
    </q-page>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    #contact-info{
        margin-left:auto;
        margin-right:auto;        
    } 

</style>