import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    array: [2, 1, 0, 3],
    root: {
      value: 1,
      left: {
        value: 0,
        left: undefined,
        right: undefined
      },
      right: {
        value: 2,
        left: undefined,
        right: {
          value: 3,
          left: undefined,
          right: undefined
        }
      }
    },
  },
  getters: {
    sumTree (state) {
      return linearizeTree(state.root).reduce((a, b) => a + b)
    },
    sumArray (state) {
      return state.array.reduce((a, b) => a + b)
    }
  },
  mutations: {
    insertToTree (state, newValue) {
      _insertToTree(state.root, newValue)
    },
    insertToArray(state, newValue) {
      state.array.push(newValue)
    }
  },
})

function _insertToTree(node, newValue) {
  if (newValue < node.value) {
    if (node.left !== undefined) {
      _insertToTree(node.left, newValue)
    } else {
      node.left = { value: newValue }
    }
  } else if (node.value < newValue) {
    if (node.right !== undefined) {
      _insertToTree(node.right, newValue)
    } else {
      node.right = { value: newValue }
    }
  }
}


function linearizeTree(node) {
  const list_ = []
  if (node.left) {
    linearizeTree(node.left).forEach(e => list_.push(e))
  }
  list_.push(node.value)
  if (node.right) {
    linearizeTree(node.right).forEach(e => list_.push(e))
  }
  return list_
}

