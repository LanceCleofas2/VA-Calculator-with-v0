import { Button, Select } from "flowbite-react";

export default function Component() {
  return (
    <div className="bg-white p-8">
      <div className="mb-10 text-center text-2xl font-bold uppercase tracking-wide">Trajector</div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 p-8 border rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Begin by choosing the areas where you have disabilities</h2>
              <p className="text-sm mb-8">
                Choose the specific body part affected by your disability and indicate the percentage of impairment from
                0% to 100%.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-1">
                  <Select>
                    {/* <SelectTrigger id="body-part">
                      <SelectValue placeholder="Others" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="head">Head</SelectItem>
                      <SelectItem value="arms">Arms</SelectItem>
                      <SelectItem value="legs">Legs</SelectItem>
                      <SelectItem value="torso">Torso</SelectItem>
                    </SelectContent> */}
                  </Select>
                </div>
                <div className="col-span-3 flex flex-wrap gap-4">
                  <Button className="w-1/5">10%</Button>
                  <Button className="w-1/5">20%</Button>
                  <Button className="w-1/5">30%</Button>
                  <Button className="w-1/5">40%</Button>
                  <Button className="w-1/5">50%</Button>
                  <Button className="w-1/5">60%</Button>
                  <Button className="w-1/5">70%</Button>
                  <Button className="w-1/5">80%</Button>
                  <Button className="w-1/5">90%</Button>
                  <Button className="w-1/5">100%</Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {/* <img
                alt="Disability Image"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              /> */}
              <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild> */}
                        <div className="w-24 h-24 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                          <span className="sr-only">Head</span>
                        </div>
                      {/* </TooltipTrigger>
                      <TooltipContent> */}
                        <p>Head</p>
                      {/* </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild> */}
                        <div className="w-32 h-32 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                          <span className="sr-only">Torso</span>
                        </div>
                      {/* </TooltipTrigger>
                      <TooltipContent> */}
                        <p>Torso</p>
                      {/* </TooltipContent>
                    </Tooltip> */}
                    <div className="flex items-center justify-between w-64">
                      {/* <Tooltip>
                        <TooltipTrigger asChild> */}
                          <div className="w-24 h-12 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                            <span className="sr-only">Left Arm</span>
                          </div>
                        {/* </TooltipTrigger>
                        <TooltipContent> */}
                          <p>Left Arm</p>
                        {/* </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild> */}
                          <div className="w-24 h-12 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                            <span className="sr-only">Right Arm</span>
                          </div>
                        {/* </TooltipTrigger>
                        <TooltipContent> */}
                          <p>Right Arm</p>
                        {/* </TooltipContent>
                      </Tooltip> */}
                    </div>
                    <div className="flex items-center justify-between w-32">
                      {/* <Tooltip>
                        <TooltipTrigger asChild> */}
                          <div className="w-12 h-24 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                            <span className="sr-only">Left Leg</span>
                          </div>
                        {/* </TooltipTrigger>
                        <TooltipContent> */}
                          <p>Left Leg</p>
                        {/* </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild> */}
                          <div className="w-12 h-24 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700">
                            <span className="sr-only">Right Leg</span>
                          </div>
                        {/* </TooltipTrigger>
                        <TooltipContent> */}
                          <p>Right Leg</p>
                        {/* </TooltipContent>
                      </Tooltip> */}
                    </div>
                  {/* </TooltipProvider> */}
                </div>
              </section>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold">Ratings</span>
            <span className="text-xs font-semibold">Step 1</span>
          </div>
        </div>
        <div className="p-8 border rounded-lg">
          <div className="mb-8 flex justify-center items-center">
            {/* <Progress className="w-full" value={0} /> */}
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Total Disability Rating</h3>
            <p className="text-4xl font-bold mb-4">0%</p>
            <h3 className="text-lg font-semibold mb-2">Total Monthly Compensation</h3>
            <p className="text-xl font-bold">$ 0</p>
          </div>
          <div className="mt-8">
            {/* <LineChart className="w-full aspect-[4/3]" /> */}
          </div>
        </div>
      </div>
      <div className="mt-16 mb-8">
        <h2 className="text-lg font-semibold mb-4">
          To complete the assessment, fill out the form to proceed with generating your quote.
        </h2>
        <p className="text-sm mb-8">
          Are you sure your VA rating is fair? Let us uncover your potential rating eligibility.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="border-b pb-4">
            <h3 className="text-sm font-semibold mb-2">Combined Disability Percentage:</h3>
            <p className="text-lg font-bold">0%</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-sm font-semibold mb-2">Current Disability Rating:</h3>
            <p className="text-lg font-bold">0%</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-sm font-semibold mb-2">Monthly Payment Amount:</h3>
            <p className="text-lg font-bold">$0</p>
          </div>
          <div className="border-b pb-4">
            <Select>
              {/* <SelectTrigger id="children-under-18">
                <SelectValue placeholder="How many dependent children do you have who are under the age of 18?" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="0">None</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
          <div className="border-b pb-4">
            <Select>
              {/* <SelectTrigger id="children-18-24">
                <SelectValue placeholder="How many dependent children do you have who are between the ages of 18 and 24?" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="0">None</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
          <div className="border-b pb-4">
            <Select>
              {/* <SelectTrigger id="marital-status">
                <SelectValue placeholder="What is your marital status?" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
          <div className="border-b pb-4">
            <Select>
              {/* <SelectTrigger id="dependent-parents">
                <SelectValue placeholder="How many dependent parents do you have?" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="0">None</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button>Submit</Button>
      </div>
    </div>
  )
}
