/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import {
  DomainsImpl,
  DomainTopicsImpl,
  EventChannelsImpl,
  EventSubscriptionsImpl,
  SystemTopicEventSubscriptionsImpl,
  PartnerTopicEventSubscriptionsImpl,
  OperationsImpl,
  PartnerNamespacesImpl,
  PartnerRegistrationsImpl,
  PartnerTopicsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  SystemTopicsImpl,
  TopicsImpl,
  ExtensionTopicsImpl,
  TopicTypesImpl
} from "./operations";
import {
  Domains,
  DomainTopics,
  EventChannels,
  EventSubscriptions,
  SystemTopicEventSubscriptions,
  PartnerTopicEventSubscriptions,
  Operations,
  PartnerNamespaces,
  PartnerRegistrations,
  PartnerTopics,
  PrivateEndpointConnections,
  PrivateLinkResources,
  SystemTopics,
  Topics,
  ExtensionTopics,
  TopicTypes
} from "./operationsInterfaces";
import { EventGridManagementClientContext } from "./eventGridManagementClientContext";
import { EventGridManagementClientOptionalParams } from "./models";

export class EventGridManagementClient extends EventGridManagementClientContext {
  /**
   * Initializes a new instance of the EventGridManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials that uniquely identify a Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: EventGridManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.domains = new DomainsImpl(this);
    this.domainTopics = new DomainTopicsImpl(this);
    this.eventChannels = new EventChannelsImpl(this);
    this.eventSubscriptions = new EventSubscriptionsImpl(this);
    this.systemTopicEventSubscriptions = new SystemTopicEventSubscriptionsImpl(
      this
    );
    this.partnerTopicEventSubscriptions = new PartnerTopicEventSubscriptionsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.partnerNamespaces = new PartnerNamespacesImpl(this);
    this.partnerRegistrations = new PartnerRegistrationsImpl(this);
    this.partnerTopics = new PartnerTopicsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.systemTopics = new SystemTopicsImpl(this);
    this.topics = new TopicsImpl(this);
    this.extensionTopics = new ExtensionTopicsImpl(this);
    this.topicTypes = new TopicTypesImpl(this);
  }

  domains: Domains;
  domainTopics: DomainTopics;
  eventChannels: EventChannels;
  eventSubscriptions: EventSubscriptions;
  systemTopicEventSubscriptions: SystemTopicEventSubscriptions;
  partnerTopicEventSubscriptions: PartnerTopicEventSubscriptions;
  operations: Operations;
  partnerNamespaces: PartnerNamespaces;
  partnerRegistrations: PartnerRegistrations;
  partnerTopics: PartnerTopics;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  systemTopics: SystemTopics;
  topics: Topics;
  extensionTopics: ExtensionTopics;
  topicTypes: TopicTypes;
}
