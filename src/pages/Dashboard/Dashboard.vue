<template>
  <div class="dashboard-page">
    <h1 class="page-title">Tasks</h1>
    <div class="row">
    <div class="col-md-12">
        <div class="form-group form-inline pull-left VueTables__search">
            <div class="VueTables__search-field">
                <!--<label for="VueTables__search_Vsn4i" class=""></label><input v-model='searchKey' @keyup='searchTask(searchKey)' type="text" placeholder="Search query" id="VueTables__search_Vsn4i" autocomplete="off" class="VueTables__search__input form-control" />-->
            </div>
        </div>
        <div class="form-group form-inline pull-right VueTables__limit">
            <div class="VueTables__limit-field">
                <label for="VueTables__limit_Vsn4i" class="">Assigned to: </label>
                <select name="limit" id="VueTables__limit_Vsn4i" @change="onChange($event)"  class="form-control">
                    <option value="All">All</option>
                    <option value="Diwakar">Diwakar</option>
                    <option value="Dhanya">Dhanya</option>
                    <option value="Ritesh">Ritesh</option>
                    <option value="Sharda">Sharda</option>
                    <option value="Yogesh">Yogesh</option>
                </select>
            </div>
        </div>
    </div>
</div>

    
    <b-row>
      <b-col xs="12" lg="6" xl="4" v-for="task in filteredList" :key="task.id">
        <router-link v-bind:to="{ name: `TaskDetail`, params: { id: task.id, name: task.name  }}">
        <BigStat
          :id="task.id"
          :name="task.name"
          :description="task.description" 
          :assigned_to="task.assigned_to"
          :status="task.status"
          :update="task.update[task.update.length -1].update"
          :target_date="task.target_date"
          :priority="task.priority"
        />
        </router-link>
      </b-col>
    </b-row>
  
  
  <div class="circle-div" @click="showModal"></div>

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
            <input id="normal-field" type="text" placeholder="Name of the task" class="form-control" v-model="task_name"/>
            <!----><!----><!---->
        </div>
    </div>
    <div role="group" class="form-row form-group" horizontal="" breakpoint="md" id="__BVID__533">
        <label for="normal-field" class="col-4 col-form-label text-md-right" id="__BVID__533__BV_label_">Task Description</label>
        <div class="col">
            <textarea id="default-textarea" rows="3" wrap="soft" class="form-control" placeholder="Description" spellcheck="false" data-gramm="false" v-model="task_description"></textarea>
            <!----><!----><!---->
        </div>
    </div>

    <div role="group" class="form-row form-group" horizontal="" id="__BVID__631">
      <label for="simple-select" class="col-4 col-form-label text-right" id="__BVID__631__BV_label_">Assign to</label>
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
              <select v-model="task_assigned_to" class="btn dropdown-toggle btn-default">
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
      <label for="simple-select" class="col-4 col-form-label text-right" id="__BVID__631__BV_label_">Project Status</label>
      <div class="col">
          <div id="simple-select" class="dropdown b-dropdown btn-group" aria-describedby="__BVID__631__BV_description_">
              <!---->
              <!--<button id="simple-select__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle btn-default">Not Initiated</button>
              <ul role="menu" tabindex="-1" aria-labelledby="simple-select__BV_toggle_" class="dropdown-menu" style="">
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Initiated</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">In-Progress</button></li>
                  <li role="presentation"><button role="menuitem" type="button" class="dropdown-item">Completed</button></li>
              </ul>-->
              <select v-model="task_status" class="btn dropdown-toggle btn-default">
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
        <b-form-datepicker id="example-datepicker" v-model="targetDate" class="mb-2"></b-form-datepicker>
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
              <select v-model="taskPriority" class="btn dropdown-toggle btn-default">
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
            <textarea id="default-textarea" rows="3" wrap="soft" class="form-control" placeholder="Update" spellcheck="false" data-gramm="false" v-model="task_update"></textarea>
            <!----><!----><!---->
        </div>
    </div>

    
    
    
    <div role="group" class="form-row form-group form-action bg-transparent pl-1" horizontal="" breakpoint="md" id="__BVID__554">
        <label for="transparent-field" class="col-4 col-form-label"></label>
        <div class="col">
            <button type="submit" class="btn ml-0 mr-3 btn-primary" >Submit</button>
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
      task_update : [],
      task_status : '',
      user :{},
      taskList : [],
      task : {
      },
      
      update : [],
      filteredList : [],
      searchKey : '',
      targetDate : '',
      taskPriority : ''
      
    };
  },
  created () {
    
    this.user = this.$store.getters.user;
    console.log(this.user)
    this.getTaskList()
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
    onFormSubmit(event) {
      let tempUpdate = {
        update_on : new Date(),
        update : this.task_update
      }

      this.update.push(tempUpdate)

      this.task = {
        name : this.task_name,
        description : this.task_description,
        assigned_to : this.task_assigned_to,
        status : this.task_status,
        target_date : this.targetDate,
        priority : this.taskPriority,
        update : this.update,
        added_on : new Date(),
        added_by_name : this.$store.getters.user.data.displayName,
        added_by_email : this.$store.getters.user.data.email,
      }
      event.preventDefault()
      db.collection('tasks').add(this.task).then(() => {
          alert("Task added successfully!");
          this.task_name = ''
          this.task_description = ''
          this.isShow = false
          this.targetDate = ''
          this.taskPriority = ''
      }).catch((error) => {
          console.log(error);
      });
    },
    
    getTaskList() {
      
      db.collection("tasks")
        .orderBy('priority')
        .onSnapshot( snap  => {
          this.taskList = [];
          snap.forEach((doc) => {
           this.taskList.push({
              id: doc.id,
              name: doc.data().name,
              description: doc.data().description,
              assigned_to: doc.data().assigned_to,
              status: doc.data().status,
              priority: doc.data().priority,
              target_date: doc.data().target_date,
              added_on: doc.data().added_on,
              update: doc.data().update
            });
            //console.log(doc.id, " => ", doc.data());
          });
          this.filteredList = this.taskList     
          return this.taskList
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    onChange(event) {
        this.filteredList = this.taskList     
        if (event.target.value != "All") {
            this.filteredList = this.taskList.filter(item => item.assigned_to == event.target.value)
        }
        else {
          this.filteredList = this.taskList
        }    
    },
    searchTask(searchKey) {
        console.log(searchKey.toLowerCase())
        
        if (this.searchKey.length >= 3 ) {
            this.filteredList = this.taskList     
            this.filteredList = this.taskList.filter(item => item.name == searchKey.toLowerCase() )
            console.log(this.filteredList)
            //|| item.description == searchKey.toLowerCase() || item.update == searchKey.toLowerCase())
        }
        else {
          this.filteredList = this.taskList
        }
    } 
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  /*  donut() {
      let revenueData = this.getRevenueData();
      let {danger, info, primary} = this.appConfig.colors;
      let series = [
        {
          name: 'Revenue',
          data: revenueData.map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 120
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: [danger, info, primary],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: 'Montserrat'
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    }
  }*/
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
<style scoped>
.circle-div {
    
    background-image: url("../../assets/icons/plus.png");
    height: 40px;
    width: 40px;
    background-size: 40px;
    position: fixed;
    bottom: 50px;
    right: 25px;
    
    
    
}
</style>
