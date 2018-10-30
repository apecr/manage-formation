const yargs = require('yargs');
const path = require('path');
const {getCostElements} = require('./src/formation');

const argv = yargs
  .command('$0', 'Get all the formation events'
    , yargsDef => { }
    , async argvDef => {
      const cost = await getCostElements();
      console.log(`You have expended ${cost}`);
    })
  .command('createEvent [title] [type] [price] [status] [provider] [url] [labels]', 'Get the appids from a project', yargsProj => {
    yargsProj.options({
      t: {
        demand: true,
        default: false,
        alias: 'title',
        describe: 'Title',
        string: true
      },
      type: {
        demand: true,
        default: 'Course',
        alias: 'type',
        describe: 'Type of event (course, book, congress)',
        string: true
      },
      price: {
        demand: true,
        default: false,
        describe: 'Price of the event',
        alias: 'price',
        number: true
      },
      status: {
        demand: true,
        default: false,
        describe: 'Status in Sngular of the event',
        alias: 'status',
        string: true
      },
      provider: {
        demand: true,
        default: false,
        describe: 'Provider of the event',
        alias: 'provider',
        string: true
      },
      url: {
        demand: true,
        default: false,
        describe: 'Url of the event',
        alias: 'url',
        string: true
      },
      labels: {
        demand: false,
        default: false,
        describe: 'Labels of the event',
        alias: 'labels',
        array: true
      }

    });
  }, async argvEvent => {
    console.log(argvEvent);
  })
  .help()
  .alias('help', 'h')
  .argv;