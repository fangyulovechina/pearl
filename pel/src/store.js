import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ListUrl:"/data/jiu.json",
    list:[],
    listA:[],
    loadFlag:false,
    logFlag :false,
    userInfo:"",
    proCount:0 ,
    proIndex:0 ,
    proInfo:{}
  },
  mutations: {
    book (state) {
      state.ListUrl = "/data/book.json"
    },
    dig (state) {
      state.ListUrl = "/data/digital.json"
    },
    house (state) {
      state.ListUrl = "/data/household.json"
    },
    oversea(state) {
      state.ListUrl = "/data/overseas.json"
    },
    disc(state) {
      state.ListUrl = "/data/jiu.json"
    },
    detail(state) {
      state.ListUrl = "/data/jiu.json"
    },
    sale(state) {
      state.saleFlag = true
    },
    load(state) {
      
    },
    log(state){
      state.logFlag = true
    },
    logOut(state){
      state.logFlag = false
    },
    nike(state){
    },
    addPro(state){
      state.proCount ++
    },
    zero(state){
      state.proCount = 0
    },
    proInfo(state){

    }
  },
  actions: {
    changeBook({commit,state}) {
      axios("/data/book.json").then(res=>state.list = res.data.data)
      commit("book")
    },
    changeDigital({commit,state}) {
      axios("/data/digital.json").then(res=>state.list = res.data.data)
      commit("dig")
    },
    changeHouse({commit,state}) {
      axios("/data/household.json").then(res=>state.list = res.data.data)
      commit("house")
    },
    changeOversea({commit,state}) {
      axios("/data/overseas.json").then(res=>state.list = res.data.data)
      commit("oversea")
    },
    changeDisc({commit,state}) {
      axios("/data/jiu.json").then(res=>state.list = res.data.data)
      commit("disc")
    },
    changeDetail({commit,state},pl) {
      axios("/data/jiu.json").then(res=>state.listA = res.data.data)
      commit("detail")
    },
    changeSale({commit,state}) {
      commit("sale")
    },
    changeLoad({commit, state},pl) {
      state.loadFlag = pl
      commit("load")
    },
    changeLog({commit, state}){
      commit("log")
    },
    logOut({commit, state}){
      commit("logOut")
    },
    sentNike({commit, state},pl){
      state.userInfo = pl.products
      state.proIndex = pl.index
      commit("nike")
    },
    addPro({commit, state}){
      commit("addPro")
    },
    zero({commit, state}){
      commit("zero")
    },
    proInfo({commit, state},pl){
      state.proInfo = pl
      commit("proInfo")
    }
  },
  getters: {
    ListUrl(state) {
      return {
        book: state.ListUrl
      }
    },
    proCount(state) {
      return {
        count:state.proCount
      }
    }
  }
})
