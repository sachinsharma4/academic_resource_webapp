
var mongoose =require('mongoose')
const pyqSchema = new mongoose.Schema({
  year: { type: String, required: true },
  semester: { type: Number, required: true },
  subject:{ type: String, required: true },
  link:{ type: String, required: true },
});
mongoose.models={};
const Pyq =  mongoose.model('pyq', pyqSchema);
export default Pyq;



