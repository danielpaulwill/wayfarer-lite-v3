import OptionSelect from "./OptionSelect";

function EvilReveal () {
  
  // t.integer "event_id"
  // t.boolean "is_complete"
  // t.datetime "created_at", precision: 6, null: false
  // t.datetime "updated_at", precision: 6, null: false
  // t.string "restriction_type"
  // t.integer "restriction_value"
  // t.string "restriction_operation"
  // t.string "action"
  // t.string "result"

  const convo = [{
    id: 1,
    is_complete: false,
    action: "conversation 1",
    result: "You learned stuff 1"
  },
  {
    id: 2,
    is_complete: false,
    action: "conversation 2",
    result: "You learned stuff 2"
    }]

  let options = convo.map((option) => <OptionSelect key={option.id} option={option} /*onOptionSelect={onOptionSelect}*/ />)
  
  return (
    <div className="center">
      <div>
        <h2>Evil Reveal</h2>
        <p>A conversation with a demon</p>
        {options}
        {/* <h2>{event.name}</h2>
        <p>{event.description}</p>
        {options} */}
      </div>
    </div>
  )
};

export default EvilReveal;

