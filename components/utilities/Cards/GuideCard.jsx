const { motion } = require("framer-motion");

function GuideCard(props) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className={props.className}>
       <div className="">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-blue-700">{props.number}</h4>
        <h4 className="mb-2 text-2xl font-bold tracking-tight "><span className={props.color}>{props.title}</span></h4>
        <p className="mb-3 font-medium ">{props.content}</p>
      </div>
      {/* <div className="text-start mt-4">
        <h4 className="text-blue-700 text-2xl font-bold">{props.number}</h4>
        <h4 className=" mt-4 text-blue-900 leading-tight font-semibold">{props.title}</h4>
        <p className="mt-7 text-lg font-normal text-blue-700 ">{props.content}</p>
      </div> */}
    </motion.div>
  );
}

export default GuideCard;
