/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Solutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationsManagementClientContext } from "../operationsManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Solution,
  SolutionsCreateOrUpdateOptionalParams,
  SolutionsCreateOrUpdateResponse,
  SolutionPatch,
  SolutionsUpdateOptionalParams,
  SolutionsUpdateResponse,
  SolutionsDeleteOptionalParams,
  SolutionsGetOptionalParams,
  SolutionsGetResponse,
  SolutionsListByResourceGroupOptionalParams,
  SolutionsListByResourceGroupResponse,
  SolutionsListBySubscriptionOptionalParams,
  SolutionsListBySubscriptionResponse
} from "../models";

/** Class containing Solutions operations. */
export class SolutionsImpl implements Solutions {
  private readonly client: OperationsManagementClientContext;

  /**
   * Initialize a new instance of the class Solutions class.
   * @param client Reference to the service client
   */
  constructor(client: OperationsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates the Solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to create OMS Solution.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    solutionName: string,
    parameters: Solution,
    options?: SolutionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SolutionsCreateOrUpdateResponse>,
      SolutionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SolutionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, solutionName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates the Solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to create OMS Solution.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    solutionName: string,
    parameters: Solution,
    options?: SolutionsCreateOrUpdateOptionalParams
  ): Promise<SolutionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      solutionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch a Solution. Only updating tags supported.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to patch a Solution.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    solutionName: string,
    parameters: SolutionPatch,
    options?: SolutionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SolutionsUpdateResponse>,
      SolutionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SolutionsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, solutionName, parameters, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Patch a Solution. Only updating tags supported.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param parameters The parameters required to patch a Solution.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    solutionName: string,
    parameters: SolutionPatch,
    options?: SolutionsUpdateOptionalParams
  ): Promise<SolutionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      solutionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the solution in the subscription.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, solutionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the solution in the subscription.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      solutionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the user solution.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param solutionName User Solution Name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    options?: SolutionsGetOptionalParams
  ): Promise<SolutionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      getOperationSpec
    );
  }

  /**
   * Retrieves the solution list. It will retrieve both first party and third party solutions
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SolutionsListByResourceGroupOptionalParams
  ): Promise<SolutionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves the solution list. It will retrieve both first party and third party solutions
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SolutionsListBySubscriptionOptionalParams
  ): Promise<SolutionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Solution
    },
    201: {
      bodyMapper: Mappers.Solution
    },
    202: {
      bodyMapper: Mappers.Solution
    },
    204: {
      bodyMapper: Mappers.Solution
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Solution
    },
    201: {
      bodyMapper: Mappers.Solution
    },
    202: {
      bodyMapper: Mappers.Solution
    },
    204: {
      bodyMapper: Mappers.Solution
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions/{solutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Solution
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/solutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SolutionPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/solutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SolutionPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
