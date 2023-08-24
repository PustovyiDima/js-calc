class Calc {
  static #value = ''
  static #isDot = false
  static #NAME = 'calc'

  static add = (newValue) => {
    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    this.#value = this.#value.concat(newValue)
    this.#output()
  }

  static #output = () => {
    window.output.innerHTML = this.#value
    this.#save()
  }

  static dot = () => {
    if (this.#isDot) {
      return null
    }

    if (this.#value == '') {
      this.#value = this.#value.concat('0.')
      this.#output()
    }

    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat('.')
    this.#isDot = true
    this.#output()
  }

  static op = (opValue) => {
    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }
    // if (
    //   this.#value.includes('+') ||
    //   this.#value.includes('-') ||
    //   this.#value.includes('*') ||
    //   this.#value.includes('/')
    // ) {
    //   return null
    // }
    this.#value = this.#value.concat(opValue)
    this.#isDot = false
    this.#output()
  }

  static reset = () => {
    this.#value = ''
    this.#isDot = false
    this.#output()
  }

  static result = () => {
    this.#value = String(eval(this.#value))
    this.#output()
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    this.#value =
      window.localStorage.getItem(this.#NAME) || ''
  }

  static init = () => {
    this.#load()
    this.#output()
    console.log('Calc is init')
  }
}

Calc.init()

window.calc = Calc //звязка
