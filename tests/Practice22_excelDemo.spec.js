const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');

async function excelTest() 
{
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/rpatil79/Downloads/excelDownloadTest1.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) =>
    {
        row.eachCell((cell,colNumber) =>
        {
            if(cell.value=== 'Apple')
                {
                    console.log(rowNumber);
                    console.log(colNumber);
                }
        })
    })

    const cell = worksheet.getCell(3,2);
    cell.value = "Iphone";
    await workbook.xlsx.writeFile("C:/Users/rpatil79/Downloads/excelDownloadTest1.xlsx")
}

excelTest();