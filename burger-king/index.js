const puppeteer = require('puppeteer')
const moment = require('moment')
const faker = require('faker')

const express = require('express')
const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

function formatMonth(month) {
    return month > 9 ? `${month}` : `0${month}`
}

async function checkAllRows(page, selectorNumber) {
    await page.waitForSelector('#surveyQuestions')
    await page.evaluate(selectorNumber => {
        const arrayRows = document.querySelectorAll('tr')
        arrayRows.forEach(row => {
            if(row.id) {
                console.log(`document.querySelector(#${row.id} > .Opt${selectorNumber} input).click()`)
                document.querySelector(`#${row.id} > .Opt${selectorNumber} input`).click()
            }
        })
    }, selectorNumber)
}

async function checkRadioButton(page, selectorNumber) {
    await page.waitForSelector('#surveyQuestions')
    await page.evaluate(selectorNumber => {
        const checks = document.querySelectorAll('input')
        checks.forEach(check => {
            if(check.value === selectorNumber) {
                check.click()
            }
        })
    }, selectorNumber)
}

const fetchWhopper = async function(storeNumber = '21019', date, time) {
    const dateFormatted = moment(date, 'DD/MM/YYYY')

  try {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 20
    })
    const page = await browser.newPage()

    await page.goto('https://www.bkvousecoute.fr/')

    const navigationPromise = page.waitForNavigation({
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    })

    await page.waitForSelector('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #SurveyCode')
    await page.type('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #SurveyCode', storeNumber)

    await page.select('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #InputDay', dateFormatted.get('date').toString())
    await page.select('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #InputMonth', formatMonth(dateFormatted.get('month')+1))

    await page.evaluate(time => {
        const hours = time.split(':')[0]
        const minutes = time.split(':')[1]
        document.querySelector('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #InputHour').value = hours
        document.querySelector('#content > #surveyEntryForm > #surveyQuestions > .IndexText01 > #InputMinute').value = minutes
    }, time)

    await page.waitForSelector('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyEntryForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('.Opt2 input')
    await page.evaluate(() => {
        document.querySelector('.Opt2 input').click()
    })

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('.Opt2 input')
    await page.evaluate(() => {
        document.querySelector('.Opt2 input').click()
    })

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('.Opt1 input')
    await page.evaluate(() => {
        document.querySelector('.Opt1 input').click()
    })

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('.Opt3 input')
    await page.evaluate(() => {
        document.querySelector('.Opt3 input').click()
    })

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkAllRows(page, '3')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkAllRows(page, '3')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkAllRows(page, '3')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkAllRows(page, '3')
    
    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise
 
    await checkAllRows(page, '2')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkAllRows(page, '3')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkRadioButton(page, '1')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkRadioButton(page, '9')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await checkRadioButton(page, '9')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await checkRadioButton(page, '9')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await checkRadioButton(page, '9')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.evaluate(() => {
        const selectors = document.querySelectorAll('select')
        selectors.forEach(selector => {
            document.querySelector(`select#${selector.id}`).value = '9'
        })
    })

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.click('.textinputwrapper > input', '75001')

    await page.waitForSelector('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')
    await page.click('#content > #surveyForm > #surveyQuestions > #Buttonholder > #NextButton')

    await navigationPromise

    await page.waitForSelector('.ValCode')
    const x = await page.evaluate(() => document.querySelector('.ValCode').innerText)

    await browser.close()

    return x
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = fetchWhopper;