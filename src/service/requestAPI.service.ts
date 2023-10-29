class RequestAPIService {
  async postProductSelect () {
    const response = await fetch('http://localhost/php/nsrc53.php?cmd=product_sel', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
    return response.json()
  }

  async postModulesSelect () {
    const response = await fetch('http://localhost/php/nsrc53.php?cmd=modules_sel', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
    return response.json()
  }
  async postProductCard () {
    const response = await fetch('http://localhost/php/nsrc53.php?cmd=ProductCard', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
    return response.json()
  }
}

export default new RequestAPIService()
