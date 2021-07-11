<template>
  <div class="mb-lg">
    <Widget
      class="h-100 alert-transparent" style="margin-bottom : 5px !important" :class="{high: priority == '1', low: priority == '3', medium: priority == '2'}"
      bodyClass="p-0 mt-0"
    >
      <div class="d-flex justify-content-between flex-wrap px-4">
        
        <h5 class='d-flex align-items-center pb-1 bigStatTitle'>
          <span :class="`circle  mr-sm`" :style="{ fontSize: '6px' }" />
            <span class="fw-normal ml-xs">{{name}}</span>&nbsp;&nbsp;&nbsp; <small> ({{target_date}})</small>
        </h5>
        <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'Completed'" class="mr-1 btn-sm alert-success alert-transparent"
         >{{ status }}</h5>
         <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'Initiated'" class="mr-1 btn-sm alert-warning alert-transparent"
         >{{ status }}</h5>
         <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'Not Initiated'" class="mr-1 btn-sm alert-danger alert-transparent"
         >{{ status }}</h5>
         <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'In-Progress'" class="mr-1 btn-sm alert-info alert-transparent"
         >{{ status }}</h5>
         
        <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'High'" class="mr-1 btn-sm alert-success alert-transparent"
         >{{ status }}</h5>
         <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'Medium'" class="mr-1 btn-sm alert-warning alert-transparent"
         >{{ status }}</h5>
         <h5 data-v-a0ba085c="" type="button" style="height: 28px" v-if="status == 'Low'" class="mr-1 btn-sm alert-danger alert-transparent"
         >{{ status }}</h5>
         
            <!--<i class="la la-edit text-primary la-lg " />-->
         
        <!--<b-dropdown :text="text" variant="default" size="sm">
          <b-dropdown-item-button @click="changeText('Not Initiated')">Not Initated</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Initiated')">Initiated</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('In-Progress')">In-Progress</b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Completed')">In-Progress</b-dropdown-item-button>
        </b-dropdown>-->
      </div>
      <div class="px-5">
        
        <div class="d-flex">
          
          <div class="w-100  pl-1">
            
            <p class="text-muted mb-2 mr"><small>{{ description }}</small></p>

          </div>
        </div>
        
        <div class="d-flex mt-1">  
          <div class="w-75 pl-1">
            <p class="text-muted mb-2 mr "><small>{{ update }}</small></p>
            
          </div>
          <div class="w-25 pl-1">
            <p class="text-muted text-right mb-2 mr"><small>{{ assigned_to }}</small></p>
            
          </div>
          
        
        </div>  

        <!--<div class="d-flex pb-3">
          <div class="w-100 pl-1">
            <p class="text-muted mb-2 mr info"> <small>Target Date : {{ target_date }} </small></p>
          </div>
          
        </div>-->

        <div class="flex pb-3">
          <div class="w-100 pl-1">
            <b-progress class="mb-xs" style="height: 5px"
                variant="info" :value="status == 'Not Initiated' ? value = '5' : status == 'Initiated' ? value ='25' : status == 'In-Progress' ? value ='50' : value = '100'" :max="100" />
          </div>
          
        </div>   
        
      </div>
    </Widget>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'BigStat',
  props: ['id', 'name', 'description', 'assigned_to', 'status', 'update', 'target_date', 'priority'],
  components: { Widget },
  data() {
    return {
      text: 'Not Initiated',
    };
  },
  methods: {
    changeText(text) {
      Vue.set(this, 'text', text);
      console.log(this.text)
    },
  },
};
</script>

<style src="./BigStat.scss" lang="scss" scoped />

<style scoped>
.high {
  border-top: 5px solid #21ae8c99!important;
  
}

.medium {
  border-top: 5px solid #FDA70099;
  
}

.low {
  border-top: 5px solid #FD5F0099;
  
}
</style>
