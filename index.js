class Formatter {
  //add static methods here
  static capitalize (string) {
    let x = string.substr(1)
    let y = string[0].toUpperCase()
    return y+x
  }

  static sanitize (str){
    let bin = []
    for (let i = 0; i < str.length; i++){
      if (i != '!@#$%^&*()_+=`1234567890-~|{}[];:,<>./?'){
        bin.push(i)
      }
    }
    return bin
  }

}