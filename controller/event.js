const eventEO = require('../models/event')

module.exports = {

  createEO: (req, res)=> {
    let newEvent = new eventEO({
      date: new Date(req.body.date),
      title: req.body.title,
      name_event: req.body.name_event,
      email_eo: req.body.email_eo
    }).save((err, ev)=> {
      if(err) res.send(err)
      res.send('Data created')
    })
  },
  findEO: (req, res)=> {
    eventEO.find({}, (err, evs)=> {
      if(err) res.send(err)
      res.send(evs)
    })
  },
  updateEO: (req, res)=> {
    eventEO.findByIdAndUpdate( {_id:req.params.id}, {
      date : new Date(req.body.date),
      title: req.body.title,
      name_event: req.body.name_event,
      email_eo: req.body.email_eo
    }, (err, ev)=> {
      if(err) res.send(err)
      res.send('Data Updated')
    })
  },
  deleteEO: (req, res)=> {
    eventEO.findByIdAndRemove({_id: req.params.id}, (err, ev)=> {
      if(err) res.send(err)
      res.send('Data deleted')
    })
  }
}