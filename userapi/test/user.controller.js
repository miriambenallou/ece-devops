const { expect } = require('chai')
const userController = require('../src/controllers/user')
const client = require('../src/dbClient')

describe('User', () => {

  describe('Create', () => {


    before(() => {
            client.flushall();
      });


    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

     it('avoid creating an existing user', (done)=> {
       const user = {
         username: 'sergkudinov',
         firstname: 'Sergei',
         lastname: 'Kudinov'
       }
       userController.create(user, (err, result) => {})
       userController.create(user, (err, result) => {
         expect(err).to.be.equal(null)
         expect(result).to.not.be.equal(null)
         done()
        })

     })
 })



   describe('Get', ()=> {

     it('get a user by username', (done) => {
       const user = {
         username : 'miriamben',
         firstname : 'Miriam',
         lastname : 'Benallou'
       }
       userController.get(user, (err,result) => {
         expect(err).to.not.be.equal(null)
         expect(result).to.be.equal(null)
         done()
       })
     })
   })
 })



  //     // 2. Then, check if the result of the get method is correct
  //     done()
  //   })
  // })*/
