var supertest = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var server = supertest.agent('http://localhost:3000'); 

describe('/api/contacts/', function(){

	describe('get', function(){
		it ('should return json', function(done) {
			server
				.get('/api/contacts')
                .expect(200)
				.end(function(err,res){
					if (err) return done(err); 
					expect('Content-Type', /json/); 
					done(); 
				}); 
        });
	}); 
    
    describe('post', function(){
        it('should return json', function(done) {
            server
                .post('/api/contacts')
                .set('Accept', 'application/json')
                .send(
                    {'id': 'friend',
                     'name': 'tester',
                     'age': '21',
                     'address': '612 4th avenue' })
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err,res) {
                    expect(res.body._id).to.exist; 
                    done(); 
                });
        });
    });
});
