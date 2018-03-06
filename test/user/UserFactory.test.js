'use strict'

const Moment = require('moment');

const UserFactory = artifacts.require('./UserFactory.sol');

const BigNumber = web3.BigNumber;

const should = require('chai')
	.use(require('chai-as-promised'))
	.use(require('chai-bignumber')(BigNumber))
	.should();

contract('User Factory', function ([owner, userAccount]) {

	const DOB = Moment("1983-09-19");

	let factory;

	before(async function () {
		factory = await UserFactory.deployed();
	});


	it('should create a user', async function () {
		await factory.createUser(DOB.unix(), {from: userAccount});
	});


});