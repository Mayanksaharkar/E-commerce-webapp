import { Accordion } from "react-bootstrap";

function DescAccordian({ Description }) {
  return (
    <Accordion className='relative mb-3 my-4 ' defaultActiveKey={"0"}>
      {Description.map((desc, index) => (
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>{desc.title}</Accordion.Header>
          <Accordion.Body className='text-justify'>
            {desc.discription}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default DescAccordian;
