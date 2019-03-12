interface Service {
  name: string;
}

interface Json {}

interface Action {
  action: string;
  payload? : Json;
  header?: Map<string, any>;
}

export {
    Action,
    Service,
    Json,
};
