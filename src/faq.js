import React from "react";

function Faq() {
  return (
    <div className="accordion-a">
      <h4 className="mt-1">Frequently Asked Questions</h4>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How often to get an oil change
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              It depends on your vehicle and driving habits, but generally every
              5,000-7,500 miles or every 6 months is recommended.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How often to get brakes checked
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Brakes should be inspected regularly, and the frequency of
              inspections will depend on your driving habits and the condition
              of your vehicle. A general guideline is to have them checked every
              10,000 miles or every 6 months.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why A/C is not working
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The cause of a malfunctioning air conditioning system can vary,
              but it could be due to a refrigerant leak, a faulty compressor, or
              an electrical issue. An inspection by a qualified technician is
              necessary to diagnose the problem.
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How often to get tires rotated
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Tires should be rotated every 5,000-7,500 miles, or as
                recommended in your vehicle owner's manual.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
