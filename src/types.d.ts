export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Extension: any;
  Property: any;
  UUID: any;
};

/**
 * A component defines a set of properties to be applied to entity
 * types and relation types.
 */
export type Component = {
  __typename?: 'Component';
  /** Textual description of the entity type. */
  description: Scalars['String'];
  /** The name of the component. */
  name: Scalars['String'];
  /** The properties which are applied on entity instances. */
  properties: Array<PropertyType>;
};

/** Derived from serde_json::Value but without value payload. */
export enum DataType {
  /** Represents any type (relations). */
  Any = 'ANY',
  /** Represents a JSON array. */
  Array = 'ARRAY',
  /** Represents a JSON boolean. */
  Bool = 'BOOL',
  /** Represents a JSON null value. */
  Null = 'NULL',
  /** Represents a JSON number, whether integer or floating point. */
  Number = 'NUMBER',
  /** Represents a JSON object. */
  Object = 'OBJECT',
  /** Represents a JSON string. */
  String = 'STRING'
}

/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export type EntityInstance = {
  __typename?: 'EntityInstance';
  /** The description of the entity instance. */
  description: Scalars['String'];
  /** The unique identifier of the entity instance. */
  id: Scalars['UUID'];
  /** List of relation instances which ends at this entity instance. */
  inbound: Array<RelationInstance>;
  /** List of relation instances which starts at this entity instance. */
  outbound: Array<RelationInstance>;
  /**
   * The properties of then entity instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<Scalars['Property']>;
  /** The entity type of the entity instance. */
  type?: Maybe<EntityType>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export type EntityInstanceInboundArgs = {
  typeName?: Maybe<Scalars['String']>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export type EntityInstanceOutboundArgs = {
  typeName?: Maybe<Scalars['String']>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export type EntityInstancePropertiesArgs = {
  name?: Maybe<Scalars['String']>;
};

/** Entity types defines the type of an entity instance. */
export type EntityType = {
  __typename?: 'EntityType';
  /** The behaviours. */
  behaviours: Array<Scalars['String']>;
  /** The components of the entity type. */
  components: Array<Component>;
  /** Textual description of the entity type. */
  description: Scalars['String'];
  /** The extensions which are defined by the entity type. */
  extensions: Array<Scalars['Extension']>;
  /** The entity type belongs to the given group of entity types. */
  group: Scalars['String'];
  /** List of relation types which has this entity type as inbound. */
  inboundRelations: Array<RelationType>;
  /**
   * The name of the entity type.
   *
   * The name is the unique identifier for entity types.
   */
  name: Scalars['String'];
  /** List of relation types which has this entity type as outbound. */
  outboundRelations: Array<RelationType>;
  /**
   * The properties / property types which are defined by the entity type or
   * by one of the components.
   */
  properties: Array<PropertyType>;
};


/** Entity types defines the type of an entity instance. */
export type EntityTypeExtensionsArgs = {
  name?: Maybe<Scalars['String']>;
};


/** Entity types defines the type of an entity instance. */
export type EntityTypePropertiesArgs = {
  name?: Maybe<Scalars['String']>;
};

/**
 * A flow is a container for entity instances and relation instances.
 *
 * A flow is strictly associated with a wrapper entity instance. The properties
 * of the wrapper entity instance are the properties of the flow.
 *
 * Additionally, flows can be nested -  from the perspective of the outer flow
 * the inner flow acts like an entity instance. The wrapper entity instance of
 * the inner flow is the interface which can be accessed by the outer flow.
 *
 * Entity instances and relation instances can be shared with multiple flows.
 *
 * It's even possible to connect entity instances from different flows with relation
 * instances.
 */
export type Flow = {
  __typename?: 'Flow';
  /** The entity instances contained by this flow. */
  entities: Array<EntityInstance>;
  /**
   * The id of the flow corresponds to the id of the wrapper entity instance
   *
   * This means the vector of entity instances must contain an instance with
   * the id of the flow.
   */
  id: Scalars['UUID'];
  /** The relation instances contained by this flow. */
  relations: Array<RelationInstance>;
  /** The (entity-) type of the flow. */
  type?: Maybe<EntityType>;
  /** The entity instance which is the wrapper for this flow. */
  wrapper?: Maybe<EntityInstance>;
};

/**
 * The primary key of an edge consists of the outbound id, the
 * type name and the inbound id.
 */
export type GraphQlEdgeKey = {
  /** The id of the inbound entity instance. */
  inboundId: Scalars['UUID'];
  /** The id of the outbound entity instance. */
  outboundId: Scalars['UUID'];
  /** The name of the relation type. */
  typeName: Scalars['String'];
};

/**
 * Entity instances represents an typed object which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export type GraphQlEntityInstanceDefinition = {
  /** The description of the entity instance. */
  description: Scalars['String'];
  /** The unique identifier of the entity instance. */
  id: Scalars['UUID'];
  /**
   * The properties of then entity instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<Scalars['Property']>;
  /** The name of the entity type. */
  type: Scalars['String'];
};

/**
 * Represents a flow with entity instances and relation instances.
 *
 * The entity type of the flow and the entity types of each provided entity instance must exist.
 * The relation types of each provided relation instance must exist.
 */
export type GraphQlFlowDefinition = {
  /** Textual description of the flow. */
  description: Scalars['String'];
  /**
   * The entity instances which are contained in this flow.
   *
   * It can't have a default because the wrapper entity instance must be
   * present in the list of entities.
   */
  entityInstances: Array<GraphQlEntityInstanceDefinition>;
  /**
   * The id of the flow corresponds to the id of the wrapper entity instance
   *
   * This means the vector of entity instances must contain an instance with
   * the id of the flow.
   */
  id: Scalars['UUID'];
  /** The name of the flow. */
  name: Scalars['String'];
  /** The relation instances which are contained in this flow. */
  relationInstances: Array<GraphQlRelationInstanceDefinition>;
  /** The name of the entity type. */
  type: Scalars['String'];
};

/**
 * Relation instances are edges from an outbound entity instance to an
 * inbound entity instance.
 *
 * The relation instance is of a relation type. The relation type defines
 * the entity types of the outbound entity instance and the inbound entity
 * instance. Furthermore the relation type defines which properties
 * (name, data type, socket type) a relation instance have to have.
 *
 * In constrast to the relation type, the relation instance stores values/
 * documents in it's properties.
 */
export type GraphQlRelationInstanceDefinition = {
  /** Textual description of the relation instance. */
  description: Scalars['String'];
  /** The id of the inbound vertex. */
  inboundId: Scalars['UUID'];
  /** The id of the outbound vertex. */
  outboundId: Scalars['UUID'];
  /**
   * The properties of then relation instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<Scalars['Property']>;
  /** The name of the relation type */
  type: Scalars['String'];
};

/** Search for instances */
export type Instances = {
  __typename?: 'Instances';
  /**
   * Search for entity instances.
   *
   * If an id is given, the entity instance with the given id will be returned.
   *
   * If an entity type is given, only entity instances of the given type are returned.
   */
  entities: Array<EntityInstance>;
  relations: Array<RelationInstance>;
};


/** Search for instances */
export type InstancesEntitiesArgs = {
  entityType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
};


/** Search for instances */
export type InstancesRelationsArgs = {
  inboundType?: Maybe<Scalars['String']>;
  outboundType?: Maybe<Scalars['String']>;
  relationType?: Maybe<Scalars['String']>;
};

/** Mutations for the type system, the instances and the flows. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Mutations for flows and their contained instances. */
  flows: MutationFlows;
  /** Mutations for instances (entity instances, relation instances). */
  instances: MutationInstances;
  /** Mutations for types (components, entity types, relation types). */
  types: MutationTypes;
};

/** Mutations for components */
export type MutationComponents = {
  __typename?: 'MutationComponents';
  /** Creates a new component with the given name and properties. */
  create: Component;
  delete: Scalars['Boolean'];
};


/** Mutations for components */
export type MutationComponentsCreateArgs = {
  name: Scalars['String'];
  properties?: Maybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for components */
export type MutationComponentsDeleteArgs = {
  name: Scalars['String'];
};

/** Mutation of entity instances. */
export type MutationEntityInstances = {
  __typename?: 'MutationEntityInstances';
  /**
   * Creates a new entity instance of the given type.
   *
   * The entity type must exist.
   *
   * Optionally, an UUID can be specified. If no UUID is specified one will be generated
   * randomly.
   *
   * The given properties consists of a list of pairs of property name and property value.
   * If properties are not provided, default values will be used depending on the data type
   * of the property.
   */
  create: EntityInstance;
  /**
   * Deletes an entity instance.
   *
   * TODO: Check if the entity instance is part of relation instances.
   * TODO: delete_relations: Option<bool>
   */
  delete: Scalars['Boolean'];
  /**
   * Manually tick the entity instance. This means for each property of the entity instance
   * the corresponding reactive stream will be activated with it's last value.
   *
   * This leads to a recalculation if the entity instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * Furthermore this leads to a new value propagation if the output property is connected
   * to other properties.
   */
  tick: EntityInstance;
  /** Updates the properties of the entity instance with the given id. */
  update: EntityInstance;
};


/** Mutation of entity instances. */
export type MutationEntityInstancesCreateArgs = {
  id?: Maybe<Scalars['UUID']>;
  properties?: Maybe<Array<Scalars['Property']>>;
  typeName: Scalars['String'];
};


/** Mutation of entity instances. */
export type MutationEntityInstancesDeleteArgs = {
  id: Scalars['UUID'];
};


/** Mutation of entity instances. */
export type MutationEntityInstancesTickArgs = {
  id: Scalars['UUID'];
};


/** Mutation of entity instances. */
export type MutationEntityInstancesUpdateArgs = {
  id: Scalars['UUID'];
  properties: Array<Scalars['Property']>;
};

/** Mutations for entity types */
export type MutationEntityTypes = {
  __typename?: 'MutationEntityTypes';
  /** Creates a new entity type with the given name and components and properties. */
  create: EntityType;
  /** Deletes the entity type with the given name. */
  delete: Scalars['Boolean'];
};


/** Mutations for entity types */
export type MutationEntityTypesCreateArgs = {
  behaviours?: Maybe<Array<Scalars['String']>>;
  components?: Maybe<Array<Scalars['String']>>;
  extensions?: Maybe<Array<Scalars['Extension']>>;
  group?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  properties?: Maybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for entity types */
export type MutationEntityTypesDeleteArgs = {
  name: Scalars['String'];
};

/** Mutations for flows and their contained instances. */
export type MutationFlows = {
  __typename?: 'MutationFlows';
  /** Adds an existing entity instance by id to the given flow by id */
  addEntity: Flow;
  /** Adds an existing relation instance by edge_key to the given flow by id */
  addRelation: Flow;
  /**
   * Manually ticks all entity instances and relation instances of this flow. This means, for
   * each property of each entity instance and relation instance the corresponding reactive
   * stream will be activated with it's last value.
   *
   * This leads to a recalculation if the instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * In case of entity instances, it furthermore leads to a new value propagation if the output
   * property is connected to other properties.
   */
  commit: Flow;
  /**
   * Creates a new flow and a corresponding wrapper entity instance.
   *
   * The given entity type must exist. It provides the properties for the wrapper entity instance
   * and therefore defines which properties of the flow are the inputs and outputs.
   *
   * Optionally, an UUID can be specified.
   *
   * Optionally, the initial values of the properties can be specified. Specified properties
   * which are not provided by the given entity type are lacking of a definition (data type,
   * socket type).
   */
  create: Flow;
  /** Creates a new entity instance and adds the entity instance to the given flow by id. */
  createEntity: Flow;
  /** Creates a new relation instance and adds the relation instance to the given flow by id. */
  createRelation: Flow;
  /**
   * Imports the given flow. Creates entity instances and relation instances which are contained
   * in the given flow.
   */
  import: Flow;
  /** Removes an entity instance from flow. */
  removeEntity: Flow;
  /** Removes an existing relation instance by edge_key from the given flow by id */
  removeRelation: Flow;
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsAddEntityArgs = {
  entityId: Scalars['UUID'];
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsAddRelationArgs = {
  edgeKey: GraphQlEdgeKey;
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsCommitArgs = {
  id: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsCreateArgs = {
  flowId?: Maybe<Scalars['UUID']>;
  properties?: Maybe<Array<Scalars['Property']>>;
  type: Scalars['String'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsCreateEntityArgs = {
  entityId?: Maybe<Scalars['UUID']>;
  flowId: Scalars['UUID'];
  properties?: Maybe<Array<Scalars['Property']>>;
  type: Scalars['String'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsCreateRelationArgs = {
  edgeKey: GraphQlEdgeKey;
  flowId: Scalars['UUID'];
  properties?: Maybe<Array<Scalars['Property']>>;
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsImportArgs = {
  flow: GraphQlFlowDefinition;
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsRemoveEntityArgs = {
  entityId: Scalars['UUID'];
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export type MutationFlowsRemoveRelationArgs = {
  edgeKey: GraphQlEdgeKey;
  flowId: Scalars['UUID'];
};

/** Mutations on instances. */
export type MutationInstances = {
  __typename?: 'MutationInstances';
  /** Mutations on entity instances. */
  entities: MutationEntityInstances;
  /** Mutations on relation instances. */
  relations: MutationRelationInstances;
};

/** Mutation of relation instances. */
export type MutationRelationInstances = {
  __typename?: 'MutationRelationInstances';
  /**
   * Creates a new relation instance with the given edge_key.
   *
   * The edge key is the primary key of a relation instance and consists of the id of the
   * outbound entity instance, the name of the relation type and the id of the inbound
   * entity instance.
   *
   * The relation type must exist and the given type name is matched by a prefix search.
   * For example a given type name "default_connector--property_name--property_name" will match
   * as relation type "default_connector".
   *
   * Furthermore the outbound and the inbound entity instance must exist.
   *
   * The given properties consists of a list of pairs of property name and property value.
   * If properties are not provided, default values will be used depending on the data type
   * of the property.
   */
  create: RelationInstance;
  /** Deletes an relation instance. */
  delete: Scalars['Boolean'];
  /**
   * Manually tick the relation instance. This means for each property of the entity instance
   * the corresponding reactive stream will be activated with it's last value.
   *
   * This leads to a recalculation if the relation instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * In case of the default_connector it does NOT lead to a new value propagation, because the
   * reactive streams are not consumed by the default_connector behaviour.
   */
  tick: RelationInstance;
  /** Updates the properties of the given relation instance by edge key. */
  update: RelationInstance;
};


/** Mutation of relation instances. */
export type MutationRelationInstancesCreateArgs = {
  edgeKey: GraphQlEdgeKey;
  properties?: Maybe<Array<Scalars['Property']>>;
};


/** Mutation of relation instances. */
export type MutationRelationInstancesDeleteArgs = {
  edgeKey: GraphQlEdgeKey;
};


/** Mutation of relation instances. */
export type MutationRelationInstancesTickArgs = {
  edgeKey: GraphQlEdgeKey;
};


/** Mutation of relation instances. */
export type MutationRelationInstancesUpdateArgs = {
  edgeKey: GraphQlEdgeKey;
  properties: Array<Scalars['Property']>;
};

/** Mutations for relation types */
export type MutationRelationTypes = {
  __typename?: 'MutationRelationTypes';
  /**
   * Creates a new relation type with the given name and components and properties.
   *
   * The outbound entity type and the inbound entity type must be specified.
   */
  create: RelationType;
  /** Deletes the relation type with the given name. */
  delete: Scalars['Boolean'];
};


/** Mutations for relation types */
export type MutationRelationTypesCreateArgs = {
  behaviours?: Maybe<Array<Scalars['String']>>;
  components?: Maybe<Array<Scalars['String']>>;
  extensions?: Maybe<Array<Scalars['Extension']>>;
  inboundType: Scalars['String'];
  name: Scalars['String'];
  outboundType: Scalars['String'];
  properties?: Maybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for relation types */
export type MutationRelationTypesDeleteArgs = {
  name: Scalars['String'];
};

/** Mutations for types (components, entity types, relation types). */
export type MutationTypes = {
  __typename?: 'MutationTypes';
  /** Mutations for components */
  components: MutationComponents;
  /** Mutations for entity types */
  entities: MutationEntityTypes;
  /** Mutations for relation types */
  relations: MutationRelationTypes;
};

/**
 * Definition of a property. The definition contains
 * the name of the property, the data type and the socket
 * type.
 */
export type PropertyType = {
  __typename?: 'PropertyType';
  /** The data type of the property */
  dataType: DataType;
  /** Property specific extensions */
  extensions: Array<Scalars['Extension']>;
  /** The name of the property */
  name: Scalars['String'];
  /** Specifies which type of socket */
  socketType: SocketType;
};

export type PropertyTypeDefinition = {
  /** The data type of the property */
  dataType: DataType;
  /** Property specific extensions */
  extensions: Array<Scalars['Extension']>;
  /** The name of the property */
  name: Scalars['String'];
  /** Specifies which type of socket */
  socketType: SocketType;
};

/** Search queries for the type system, the instances and the flows. */
export type Query = {
  __typename?: 'Query';
  /** Search for flows and their contained instances. */
  flows: Array<Flow>;
  /** Search for instances (entity instances, relation instances). */
  instances: Instances;
  /** Search for types (components, entity types, relation types). */
  types: Types;
};


/** Search queries for the type system, the instances and the flows. */
export type QueryFlowsArgs = {
  id?: Maybe<Scalars['UUID']>;
};

export type RelationInstance = {
  __typename?: 'RelationInstance';
  /** Textual description of the relation instance. */
  description: Scalars['String'];
  /**
   * The inbound entity instance.
   *
   * You can use this in order to navigate from the inbound entity instance to the outbound
   * entity instance or vice versa.
   */
  inbound: EntityInstance;
  /**
   * The outbound entity instance.
   *
   * You can use this in order to navigate from the outbound entity instance to the inbound
   * entity instance or vice versa.
   */
  outbound: EntityInstance;
  /**
   * The properties of then relation instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<Scalars['Property']>;
  /** The relation type. */
  type?: Maybe<RelationType>;
};


export type RelationInstancePropertiesArgs = {
  name?: Maybe<Scalars['String']>;
};

/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export type RelationType = {
  __typename?: 'RelationType';
  /** The behaviours. */
  behaviours: Array<Scalars['String']>;
  /** The relation type composes it's properties by these components. */
  components: Array<Component>;
  /** Textual description of the relation type. */
  description: Scalars['String'];
  /** The extensions which are defined by the relation type. */
  extensions: Array<Scalars['Extension']>;
  /**
   * The full name of the relation type.
   *
   * Returns "default_connector__property_name__property_name" (with type suffix).
   */
  fullName: Scalars['String'];
  /** The relation type belongs to the given group of relation types. */
  group: Scalars['String'];
  /** The inbound entity type. */
  inboundTypes: Array<EntityType>;
  /**
   * The name of the relation type.
   *
   * The name is the unique identifier for relation types.
   *
   * Returns "default_connector" for "default_connector__property_name__property_name"
   * (without type suffix).
   */
  name: Scalars['String'];
  /** The outbound entity type. */
  outboundTypes: Array<EntityType>;
  /**
   * The properties / property types which are defined by the relation type or
   * by one of the components.
   */
  properties: Array<PropertyType>;
};


/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export type RelationTypeExtensionsArgs = {
  name?: Maybe<Scalars['String']>;
};


/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export type RelationTypePropertiesArgs = {
  name?: Maybe<Scalars['String']>;
};

/**
 * The socket type defines if the property acts as an input or output socket
 * or is an hidden property
 */
export enum SocketType {
  /** The property acts as input socket and accepts incoming connections. */
  Input = 'INPUT',
  /** The property doesn't act as input or output socket. */
  None = 'NONE',
  /** The property acts as output socket and accepts outgoing connections. */
  Output = 'OUTPUT'
}

/** Search for types */
export type Types = {
  __typename?: 'Types';
  /**
   * Search for components
   *
   * Optionally the list of components can be filtered by name.
   */
  components: Array<Component>;
  /**
   * Search for entity types.
   *
   * Optionally the list of entity types can be filtered by name.
   */
  entities: Array<EntityType>;
  /** Search for relation types. */
  relations: Array<RelationType>;
};


/** Search for types */
export type TypesComponentsArgs = {
  name?: Maybe<Scalars['String']>;
};


/** Search for types */
export type TypesEntitiesArgs = {
  name?: Maybe<Scalars['String']>;
};


/** Search for types */
export type TypesRelationsArgs = {
  inboundType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outboundType?: Maybe<Scalars['String']>;
};

export type GetComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComponentsQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<any> }> }> } };

export type GetFlowEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlowEntitiesQuery = { __typename?: 'Query', flows: Array<{ __typename?: 'Flow', id: any, type?: Maybe<{ __typename?: 'EntityType', name: string, extensions: Array<any> }>, wrapper?: Maybe<{ __typename?: 'EntityInstance', id: any, properties: Array<any>, type?: Maybe<{ __typename?: 'EntityType', name: string }> }>, entities: Array<{ __typename?: 'EntityInstance', id: any, properties: Array<any>, type?: Maybe<{ __typename?: 'EntityType', name: string }> }>, relations: Array<{ __typename?: 'RelationInstance', properties: Array<any>, type?: Maybe<{ __typename?: 'RelationType', name: string, fullName: string }>, inbound: { __typename?: 'EntityInstance', id: any }, outbound: { __typename?: 'EntityInstance', id: any } }> }>, types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<any> }> }> } };
