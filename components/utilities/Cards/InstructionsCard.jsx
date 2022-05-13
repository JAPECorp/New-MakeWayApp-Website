const { motion } = require("framer-motion");

function InstructionsCard(props) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className={props.className}>
      <div className="text-start mt-4">
        <h4 className="text-blue-700 text-2xl font-bold">{props.number}</h4>
        <h4 className=" mt-4 text-white leading-tight font-semibold">{props.title}</h4>
        <p className="mt-7 text-lg text-blue-900 ">{props.content}</p>
      </div>
    </motion.div>
  );
}

export default InstructionsCard;
