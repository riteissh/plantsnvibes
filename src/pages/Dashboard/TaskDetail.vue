<template>
  <div class="dashboard-page">
    <h6><router-link v-bind:to="{ name: `AnalyticsPage`}"> BACK TO TASKS</router-link></h6>
    <h1 class="page-title">{{ task_name }} </h1>
    <hr />
    <div class="row">
    <div class="col-md-12">
        <div class="card mb-xlg border-0">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-lg">
              <div class="text-muted fw-semi-bold"> <small >Assigned To : </small> {{ task.assigned_to }} </div>
              <span class="fw-semi-bold">{{ task.status }}</span>
          </div>
          <div class="mb-lg">
              <h4 class="text-info mb-2">Description</h4>
               <h6 class="fw-semi-bold"> {{ task.description }}</h6>
          </div>
          <div class="mb-lg">
              <h4 class="text-info mb-2">Target Date</h4>
               <h6 class="fw-semi-bold"> {{ task.target_date }}</h6>
          </div>
          <div class="mb-lg">
              <h4 class="text-info mb-2">Priority</h4>
               <h6 class="fw-semi-bold"> {{ task.priority == '1' ? 'HIGH' : task.priority == '2' ? 'MEDIUM' : 'LOW' }}</h6>
          </div>
          
          <div class="mb-lg">
              <h4 class="text-info mb-0">Update Timeline</h4>
             <div class="timeline">
                <ul>
                  <li v-for="task in task.update" :key="task.update">
                    <div class="bullet green"></div>
                    <div class="time mr-3"> {{ task.update_on.toDate().toLocaleDateString('en-US') }} {{ task.update_on.toDate().toLocaleTimeString('en-US') }}</div>
                    <div class="desc">
                      <h3> {{ task.update }}</h3>                      
                    </div>
                  </li>
                  
                </ul>
              </div>  
          
          </div>
          <button type="button" class="btn btn-rounded-f btn-success" @click="showModal">Update</button>
      </div>
        </div>  
    </div>
</div>

   
  

  <div ref="modal" v-if="isShow" id="long" role="dialog" aria-labelledby="long___BV_modal_title_" aria-describedby="long___BV_modal_body_" class="modal fade show" aria-modal="true" style="display: block; padding-left: 0px;">
    <div class="modal-dialog modal-md">
        <span tabindex="0"></span>
        <div id="long___BV_modal_content_" tabindex="-1" class="modal-content">
            <header id="long___BV_modal_header_" class="modal-header">
                <h5 id="long___BV_modal_title_" class="modal-title">Add Task</h5>
                <button type="button" aria-label="Close" class="close" @click="closeModal">×</button>
            </header>
            <form class="pr-3 pl-3 pt-3 pb-3" @submit.prevent="onFormSubmit">
    
    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
        <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Task Name</label>
        <div class="col">
            <input id="normal-field" type="text" placeholder="Name of the task" class="form-control" v-model="task.name"/>
            <!----><!----><!---->
        </div>
    </div>
    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
        <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Task Description</label>
        <div class="col">
            <textarea id="default-textarea" rows="3" wrap="soft" class="form-control" placeholder="Description" spellcheck="false" data-gramm="false" v-model="task.description"></textarea>
            <!----><!----><!---->
        </div>
    </div>

    <div role="group" class="form-row form-group" horizontal="" id="__BVID__631">
      <label for="simple-select" class="col-4 col-form-label" id="__BVID__631__BV_label_">Assign to</label>
      <div class="col">
          <div id="simple-select" class="dropdown b-dropdown btn-group" aria-describedby="__BVID__631__BV_description_">
              <!---->
              <!--<button id="simple-select__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle btn-default">Ritesh</button>
              <ul role="menu" tabindex="-1" aria-labelledby="simple-select__BV_toggle_" class="dropdown-menu" style="">
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item" >Diwakar</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Sharda</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Yogesh</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Dhanya</button></li>
              </ul>-->
              <select v-model="task.assigned_to" class="btn dropdown-toggle btn-default">
                <option class="dropdown-item" value="Diwakar">Diwakar</option>
                <option class="dropdown-item">Dhanya</option>
                <option class="dropdown-item">Ritesh</option>
                <option class="dropdown-item">Sharda</option>                
                <option class="dropdown-item">Yogesh</option>
              </select>
          </div>
        </div>
    </div>
    <div role="group" class="form-row form-group" horizontal="" id="__BVID__631">
      <label for="simple-select" class="col-4 col-form-label" id="__BVID__631__BV_label_">Project Status</label>
      <div class="col">
          <div id="simple-select" class="dropdown b-dropdown btn-group" aria-describedby="__BVID__631__BV_description_">
              <!---->
              <!--<button id="simple-select__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle btn-default">Not Initiated</button>
              <ul role="menu" tabindex="-1" aria-labelledby="simple-select__BV_toggle_" class="dropdown-menu" style="">
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Initiated</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">In-Progress</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Completed</button></li>
              </ul>-->
              <select v-model="task.status" class="btn dropdown-toggle btn-default">
                
                <option class="dropdown-item" value="Not Initiated">Not Initiated</option>
                <option class="dropdown-item">Initiated</option>
                <option class="dropdown-item">In-Progress</option>
                <option class="dropdown-item">Completed</option>                
              </select>
          </div>
        </div>
    </div>

    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
      <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Target Date</label>
      <div class="col">
        <b-form-datepicker id="example-datepicker" v-model="target_date" class="mb-2"></b-form-datepicker>
      </div>  
    </div>
    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
      <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Task Priority</label>
      <div class="col">
          <div id="simple-select" class="dropdown b-dropdown btn-group" aria-describedby="__BVID__631__BV_description_">
              <!---->
              <!--<button id="simple-select__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle btn-default">Not Initiated</button>
              <ul role="menu" tabindex="-1" aria-labelledby="simple-select__BV_toggle_" class="dropdown-menu" style="">
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Initiated</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">In-Progress</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Completed</button></li>
              </ul>-->
              <select v-model="task_priority" class="btn dropdown-toggle btn-default">
                <option class="dropdown-item" value="1">High</option>
                <option class="dropdown-item" value="2">Medium</option>
                <option class="dropdown-item" value="3">Low</option>
              </select>
          </div>
      </div>  
    </div>  
    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
        <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Task Progress Update</label>
        <div class="col">
            <textarea id="default-textarea" rows="3" wrap="soft" class="form-control" 
            placeholder="Enter latest Progress here" spellcheck="false" data-gramm="false" v-model="task_update"></textarea>
            <!----><!----><!---->
        </div>
    </div>

    
    
    
    <div role="group" class="form-row form-group form-action bg-transparent pl-1" horizontal="" breakpoint="md" id="__BVID__554">
        <label for="transparent-field" class="col-4 col-form-label"></label>
        <div class="col">
            <button type="submit" class="btn ml-0 mr-3 btn-primary" @click="updateTask(id)" >Submit</button>
            <button type="button" class="btn btn-inverse" @click="closeModal">Cancel</button>
            <!----><!----><!---->
        </div>
    </div>
</form>

            <!--<footer id="long___BV_modal_footer_" class="modal-footer"><button type="button" @click="closeModal" class="btn btn-default">Cancel</button>
            <button type="button" class="btn btn-primary">Submit</button></footer>-->
        </div>
        <span tabindex="0"></span>
    </div>
</div>

  
  
  
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import BigStat from './components/BigStat/BigStat';
import mock from './mock';
import { mapGetters } from "vuex";
import { db } from '../../main';


import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget, BigStat, highcharts: Chart
  },
  data() {
    return {
      mock,
      isShow : false,
      task_name : '',
      task_description : '',
      task_assigned_to : '',
      task_update : '',
      task_status : '',
      task_priority : '',
      target_date : '',
      user :{},
      taskList : [],
      task : {
        
      },
      filteredList : [],
      searchKey : ''
      
    };
  },
  mounted () {
    this.id = this.$route.params.id
    this.task_name = this.$route.params.name
    this.user = this.$store.getters.user;
    console.log(this.user)
    this.getTask()
  },
  methods: {
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
    getRevenueData() {
      const data = [];
      const seriesCount = 3;
      const accessories = ['SMX', 'Direct', 'Networks'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    showModal() {
      //let element = this.$refs.modal.$el
      //$(element).modal('show')
      this.isShow = true
    },
    closeModal() {
      this.isShow = false
    },
    
    updateTask(id) {
      //this.isShow = true 
      let new_updates = []
      new_updates = this.task.update
      //console.log(new_updates)
      const new_update = {
        update_on : new Date(),
        update : this.task_update
      }
      //console.log(new_update)
      new_updates.push(new_update)
      //console.log(new_updates)
      let update_task = {
        name : this.task.name,
        description : this.task.description,
        assigned_to : this.task.assigned_to,
        status : this.task.status,
        target_date : this.target_date,
        priority : this.task_priority,
        update : new_updates,
        updated_by_name : this.user.data.displayName,
        updated_by_email : this.user.data.email,
      }
      event.preventDefault()
      db.collection('tasks').doc(id).update(update_task).then(() => {
          this.isShow = !this.isShow
          this.$refs.modal.classList.add('hide-display')
          console.log('show', this.isShow)
          //alert("Task updated successfully!");
              
      }).catch((error) => {
          console.log(error);
      });
      
    },
    getTask() {
      
      db.collection("tasks")
      .doc(this.id)
        .onSnapshot(
         snapshot  => {
            if (snapshot.exists) {
              this.task = snapshot.data()
            }
            else {
               console.log('No Such Document')
            }
          })
    },
    
  },
  computed: {
  /*  ...mapGetters({
      user: "user"
    })
  */
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
<style lang="scss" scoped>

.hide-display {
  display : none
}

.circle-div {
    
    background-image: url("../../assets/icons/plus.png");
    height: 40px;
    width: 40px;
    background-size: 40px;
    position: fixed;
    bottom: 50px;
    right: 25px;
}    
$black: #202020;
$white: #fff;
$dark-grey: #808080;
$light-grey: #d9d9d9;
$purple: #B97CFC;
$pink: #F93B69;
$green: #B0E8E2;
$orange: #EB8B6E;


.container {
  max-width: 350px;
  max-height: 630px;
  overflow: hidden;
  margin: 30px auto 0;
  box-shadow: 0 0 40px lighten($black, 50);
  font-family: 'Open Sans', sans-serif;
}



.timeline {
  
  ul {
    padding: 1em 0 0 2em;
    margin: 0;
    list-style: none;
    position: relative;
    
    &::before {
      content: ' ';
      height: 100%;
      width: 1px;
      background-color: $light-grey;
      position: absolute;
      top: 0;
      left: 2.5em;
      z-index: -1;
    }
  }
  
  li div{
    display: inline-block;
    margin: 1em 0;
    vertical-align: top;
  }
  
  .bullet {
    width: 1em;
    height: 1em;
    box-sizing: border-box;
    border-radius: 50%;
    background: $white;
    z-index: 1;
    margin-right: 1em;
    
    &.pink {
      border: 2px solid $pink;
    }
    
    &.green {
      border: 2px solid $green;
    }
    
    &.orange {
      border: 2px solid $orange;
    }
  }
  
  .time {
    width: 20%;
    font-size: 0.75em;
    padding-top: 0.25em;
  }
  
  .desc {
    width: 50%;
  }
  
  h3 {
    font-size: 0.9em;
    font-weight: 400;
    margin: 0;
  }
  
  h4 {
    margin: 0;
    font-size: 0.7em;
    font-weight: 400;
    color: $dark-grey;
  }
  
  .people img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
