const { motion } = require("framer-motion");

function InstructionsCard(props) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className="dark-card">
      <div className="text-center mt-4">
        <h4 className="text-blue-600">{props.number}</h4>
        <h4 className=" mt-4 text-white">{props.title}</h4>
        <p className="mt-7 text-ijikod-sm">{props.content}</p>
      </div>
    </motion.div>
  );
}

export default InstructionsCard;
