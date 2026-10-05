const { expect } = require('@playwright/test');

class B_ProductsPage {

constructor(page)
{
    this.page = page;
    this.pageTitle=page.locator('[data-test="title"]');
    this.firstProduct=page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' });
    this.secondProduct=page.locator('.inventory_item').filter({hasText:'Test.allTheThings() T-Shirt (Red)'}).getByRole('button',{name:'Add to cart'});
    this.shopLink=page.locator('.shopping_cart_link');
}

async allProducts()
{
    await expect(this.pageTitle).toContainText('Products')
    const products = await this.page.locator('.inventory_item_name').allTextContents(); // ✅ fix
    console.log(products);
    
}

async selectProducts()
{
    await this.firstProduct.click();
    await this.secondProduct.click();
    await this.shopLink.click();
}
}
module.exports={B_ProductsPage};