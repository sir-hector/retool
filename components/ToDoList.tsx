import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const ToDoList = () => {
  return (
    <div className="">
      Calendar
      {/* LIST */}
      <ScrollArea className="max-h-[300px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ToDoList;
