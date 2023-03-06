const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes')
const userMessageRouter = require('./userMessage.routes')
const userPersonalEventRouter = require('./userPersonalEvent.routes')
const userPersonalInformationRouter = require('./userPersonalInformation.routes')
const userFinancialInformationRouter = require('./userFinacnialInformation.routes')
const departmentRouter = require('./department.routes')

const departmentAnnouncementRouter = require('./departmentAnnouncement.routes')
const jobRouter = require('./job.routes')
const daysHolidayRouter = require('./daysHoliday.routes')
const daysWorkingRouter = require('./daysWorking.routes')
const expenseRouter = require('./expense.routes')
const paymentRouter = require('./payment.routes')
const applicationRouter = require('./application.routes')
const organizationRouter = require('./organization.routes')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('this is the index for api')
});

router.use('/users', userRouter)
router.use('/messages', userMessageRouter)
router.use('/personalEvents', userPersonalEventRouter)
router.use('/personalInformations', userPersonalInformationRouter)
router.use('/financialInformations', userFinancialInformationRouter)
router.use('/departments', departmentRouter)

router.use('/organizations', organizationRouter)
router.use('/departmentAnnouncements', departmentAnnouncementRouter)
router.use('/jobs', jobRouter)
router.use('/daysHolidays', daysHolidayRouter)
router.use('/daysWorkings', daysWorkingRouter)
router.use('/expenses', expenseRouter)
router.use('/payments', paymentRouter)
router.use('/applications', applicationRouter)

module.exports = router;
